import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const INSTAGRAM_USER_ID = '17841405464912653';
const TOKEN_FILE_PATH = join(process.cwd(), 'data', 'instagram-token.json');

interface TokenData {
  access_token: string;
  expires_at: number;
  token_type: string;
}

async function getStoredToken(): Promise<TokenData | null> {
  try {
    const fileContent = await readFile(TOKEN_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    return null;
  }
}

async function saveToken(tokenData: TokenData): Promise<void> {
  const dataDir = join(process.cwd(), 'data');
  try {
    await writeFile(TOKEN_FILE_PATH, JSON.stringify(tokenData, null, 2), 'utf-8');
  } catch (error) {
    const fs = require('fs');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    await writeFile(TOKEN_FILE_PATH, JSON.stringify(tokenData, null, 2), 'utf-8');
  }
}

async function refreshTokenIfNeeded(currentToken: string): Promise<string> {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
    const response = await fetch(url, { method: 'POST' });
    
    if (response.ok) {
      const data = await response.json();
      const expiresAt = Math.floor(Date.now() / 1000) + data.expires_in;
      const tokenData: TokenData = {
        access_token: data.access_token,
        expires_at: expiresAt,
        token_type: data.token_type || 'bearer'
      };
      await saveToken(tokenData);
      return data.access_token;
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
  return currentToken;
}

async function initializeTokenFromEnv(): Promise<void> {
  const initialToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (initialToken) {
    const expiresAt = Math.floor(Date.now() / 1000) + (50 * 24 * 60 * 60); // 50 days
    const tokenData: TokenData = {
      access_token: initialToken,
      expires_at: expiresAt,
      token_type: 'bearer'
    };
    await saveToken(tokenData);
  }
}

async function getAccessToken(): Promise<string> {
  try {
    let storedToken = await getStoredToken();
    
    // If no stored token, initialize from .env
    if (!storedToken) {
      await initializeTokenFromEnv();
      storedToken = await getStoredToken();
    }
    
    if (!storedToken) {
      // Fallback to env or default
      return process.env.INSTAGRAM_ACCESS_TOKEN || '';
    }
    
    const now = Math.floor(Date.now() / 1000);
    
    // Check if token expires within 5 days (refresh proactively)
    if (storedToken.expires_at - now > 5 * 24 * 60 * 60) {
      // Token is still valid
      return storedToken.access_token;
    }
    
    // Token expired or expiring soon, refresh it
    const tokenToRefresh = storedToken.access_token;
    return await refreshTokenIfNeeded(tokenToRefresh);
  } catch (error) {
    console.log('Error reading token, using env fallback');
  }
  
  // Fallback to environment variable or default token
  return process.env.INSTAGRAM_ACCESS_TOKEN || '';
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    const url = `https://graph.facebook.com/v24.0/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&limit=3&access_token=${accessToken}`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Instagram API Error:', errorData);
      
      // If token error, try refreshing
      if (errorData.error?.code === 190 || errorData.error?.message?.includes('token')) {
        console.log('Token error detected, attempting refresh...');
        const newToken = await getAccessToken();
        // Retry with new token
        const retryResponse = await fetch(`https://graph.facebook.com/v24.0/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&limit=3&access_token=${newToken}`);
        if (retryResponse.ok) {
          const retryData = await retryResponse.json();
          return NextResponse.json(retryData);
        }
      }
      
      return NextResponse.json(
        { error: 'Failed to fetch Instagram posts', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
