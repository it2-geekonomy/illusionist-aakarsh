import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const INSTAGRAM_USER_ID = '17841405464912653';
const TOKEN_KEY = 'instagram_access_token';
const TOKEN_EXPIRY_KEY = 'instagram_token_expires_at';

interface TokenData {
  access_token: string;
  expires_at: number;
}

/**
 * Refreshes the Instagram access token and stores it in Vercel KV
 */
async function refreshToken(currentToken: string): Promise<string | null> {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
    const response = await fetch(url, { method: 'POST' });
    
    if (response.ok) {
      const data = await response.json();
      const expiresAt = Math.floor(Date.now() / 1000) + data.expires_in;
      
      // Store the refreshed token in Vercel KV
      await kv.set(TOKEN_KEY, data.access_token);
      await kv.set(TOKEN_EXPIRY_KEY, expiresAt);
      
      console.log('Token refreshed and stored successfully');
      return data.access_token;
    } else {
      const errorData = await response.json();
      console.error('Failed to refresh token:', errorData);
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
  return null;
}

/**
 * Gets the Instagram access token from Vercel KV or environment variables
 * Automatically refreshes if expired or about to expire
 */
async function getAccessToken(): Promise<string> {
  try {
    // Try to get token from Vercel KV first
    const storedToken = await kv.get<string>(TOKEN_KEY);
    const expiresAt = await kv.get<number>(TOKEN_EXPIRY_KEY);
    
    if (storedToken && expiresAt) {
      const now = Math.floor(Date.now() / 1000);
      const timeUntilExpiry = expiresAt - now;
      
      // If token expires within 7 days, refresh it proactively
      if (timeUntilExpiry > 7 * 24 * 60 * 60) {
        // Token is still valid for more than 7 days
        return storedToken;
      }
      
      // Token is expiring soon or expired, refresh it
      console.log('Token expiring soon or expired, refreshing...');
      const refreshedToken = await refreshToken(storedToken);
      if (refreshedToken) {
        return refreshedToken;
      }
      // If refresh failed, use the stored token as fallback
      return storedToken;
    }
  } catch (error) {
    console.log('KV not available or error reading from KV:', error);
  }
  
  // Fallback to environment variable (initial setup)
  const envToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (envToken) {
    // Initialize KV with the token from environment
    try {
      const expiresAt = Math.floor(Date.now() / 1000) + (50 * 24 * 60 * 60); // 50 days default
      await kv.set(TOKEN_KEY, envToken);
      await kv.set(TOKEN_EXPIRY_KEY, expiresAt);
      console.log('Initialized token from environment variable');
    } catch (error) {
      console.log('Could not initialize KV, using env token directly');
    }
    return envToken;
  }
  
  console.warn('No Instagram access token found in KV or environment variables');
  return '';
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
        const refreshedToken = await refreshToken(accessToken);
        if (refreshedToken) {
          // Retry with refreshed token
          const retryResponse = await fetch(`https://graph.facebook.com/v24.0/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&limit=3&access_token=${refreshedToken}`);
          if (retryResponse.ok) {
            const retryData = await retryResponse.json();
            return NextResponse.json(retryData);
          }
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
