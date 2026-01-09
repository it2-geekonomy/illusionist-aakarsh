"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { H1, P } from "@/components/typography/typography";
import "./media.css";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
}

export default function MediaSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }
        const data = await response.json();
        setPosts(data.data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Format caption to show first line
  const formatCaption = (caption: string) => {
    if (!caption) return '';
    const lines = caption.split('\n');
    return lines[0].substring(0, 50) + (lines[0].length > 50 ? '...' : '');
  };

  // Format number for display
  const formatNumber = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <section className="relative w-full bg-black">
      <div className="w-full max-w-[1800px] mx-auto px-[clamp(1rem,4vw,3rem)] py-[clamp(2rem,5vw,4rem)]">
        {/* MEDIA Title */}
        <div className="text-center mb-[clamp(2rem,5vw,3.5rem)] -mt-[clamp(0.5rem,2vw,1rem)]">
          <H1 className="text-yellow-400">MEDIA</H1>
        </div>

        {loading && (
          <div className="text-center text-white mb-[clamp(3rem,8vw,6rem)]">
            <P>Loading Instagram posts...</P>
          </div>
        )}

        {error && (
          <div className="text-center text-red-400 mb-[clamp(3rem,8vw,6rem)]">
            <P>Error: {error}</P>
          </div>
        )}

        {/* Phone Mockups Container */}
        {!loading && !error && (
          <div className="phone-mockups-container mb-[clamp(3rem,8vw,6rem)]">
            {/* Phone 1 - First Post (Feed) */}
            {posts[0] && (
              <div className="w-full max-w-[clamp(250px,25vw,350px)] phone-container">
                <div className="relative w-full aspect-[9/19.5]  bg-transparent">
                  {/* Phone Border Image */}
                  <Image
                    src="/images/Screen_border.png"
                    alt="iPhone border"
                    fill
                    className="object-contain z-10 pointer-events-none"
                    priority
                    style={{ 
                      filter: 'brightness(1.2) contrast(1.1)',
                      mixBlendMode: 'normal'
                    }}
                  />
                  {/* Instagram Content */}
                  <div className="phone-content bg-black flex flex-col">
                    {/* Instagram Header */}
                    <div className="flex items-center justify-between p-[clamp(0.5rem,1vw,0.75rem)] border-b border-gray-700">
                      <div className="text-[clamp(1rem,2vw,1.375rem)] font-bold text-white">Instagram</div>
                      <div className="flex gap-[clamp(0.5rem,1vw,0.75rem)]">
                        {/* Direct Message Icon */}
                        <svg className="w-[clamp(1.125rem,2vw,1.375rem)] h-[clamp(1.125rem,2vw,1.375rem)]" fill="white" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 3.49-9.91 7.8 0 2.06 1.12 3.91 2.93 5.39L2 22l7.27-3.11c.98.27 2.01.41 3.05.41 5.46 0 9.91-3.49 9.91-7.8S17.5 2 12.04 2z"/>
                        </svg>
                        {/* New Post Icon */}
                        <svg className="w-[clamp(1.125rem,2vw,1.375rem)] h-[clamp(1.125rem,2vw,1.375rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                          <line x1="12" y1="5" x2="12" y2="19"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Post */}
                    <div className="flex-1 overflow-y-auto min-h-0 scrollbar-hide">
                      <div className="p-[clamp(0.5rem,1vw,0.75rem)]">
                        <div className="flex items-center gap-[clamp(0.5rem,1vw,0.75rem)] mb-[clamp(0.5rem,1vw,0.75rem)]">
                          <Image
                            src="/images/akarsh-profile.jpg"
                            alt="aakarshsbhat"
                            width={40}
                            height={40}
                            className="w-[clamp(1.75rem,3.5vw,2.25rem)] h-[clamp(1.75rem,3.5vw,2.25rem)] rounded-full object-cover flex-shrink-0"
                          />
                          <div className="text-[clamp(0.85rem,1.6vw,1rem)] font-semibold text-white">illusionistaxe
                          </div>
                        </div>
                        {posts[0].media_type === 'VIDEO' ? (
                          <video
                            src={posts[0].media_url}
                            className="w-full rounded mb-[clamp(0.5rem,1vw,0.75rem)] object-contain"
                            controls
                            autoPlay
                            muted
                            playsInline
                            loop
                          />
                        ) : (
                          <img
                            src={posts[0].media_url}
                            alt={posts[0].caption || 'Instagram post'}
                            className="w-full rounded mb-[clamp(0.5rem,1vw,0.75rem)] object-contain"
                          />
                        )}
                        <div className="text-[clamp(0.75rem,1.4vw,0.9rem)] font-semibold mb-[clamp(0.25rem,0.5vw,0.5rem)] text-white">
                          {formatNumber(posts[0].like_count)} likes
                        </div>
                        <div className="text-[clamp(0.75rem,1.4vw,0.9rem)] text-white">
                          <span className="font-semibold">aakarshsbhat</span> {formatCaption(posts[0].caption)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Nav */}
                    <div className="flex items-center justify-around p-[clamp(0.5rem,1vw,0.75rem)] border-t border-gray-700">
                      {/* Home Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="white" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                      {/* Search Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                      </svg>
                      {/* Reels Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M9 8l6 4-6 4V8z"/>
                      </svg>
                      {/* Direct Message Icon */}
                      <div className="relative">
                        <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          <path d="M13 8H3"/>
                          <path d="M17 12H3"/>
                        </svg>
                        <div className="absolute -top-1 -right-1 w-[clamp(0.5rem,0.8vw,0.625rem)] h-[clamp(0.5rem,0.8vw,0.625rem)] bg-red-500 rounded-full border-2 border-black"></div>
                      </div>
                      {/* Profile Icon */}
                      <Image
                        src="/images/akarsh-profile.jpg"
                        alt="Profile"
                        width={24}
                        height={24}
                        className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)] rounded-full object-cover border border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phone 2 - Second Post (Reel) */}
            {posts[1] && (
              <div className="w-full max-w-[clamp(250px,25vw,350px)] phone-container">
                <div className="relative w-full aspect-[9/19.5] bg-transparent">
                  {/* Phone Border Image */}
                  <Image
                    src="/images/Screen_border.png"
                    alt="iPhone border"
                    fill
                    className="object-contain z-10 pointer-events-none"
                    priority
                    style={{ 
                      filter: 'brightness(1.2) contrast(1.1)',
                      mixBlendMode: 'normal'
                    }}
                  />
                  {/* Instagram Reel Content */}
                  <div className="phone-content bg-black relative">
                    {posts[1].media_type === 'VIDEO' ? (
                      <video
                        src={posts[1].media_url}
                        poster={posts[1].thumbnail_url}
                        className="absolute top-0 left-0 right-0 w-full object-cover video-reel video-above-nav"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                      />
                    ) : (
                      <img
                        src={posts[1].media_url}
                        alt={posts[1].caption || 'Instagram post'}
                        className="absolute top-0 left-0 right-0 w-full object-cover img-above-nav"
                      />
                    )}
                    
                    {/* Right Side Icons */}
                    <div className="absolute right-[clamp(0.5rem,1vw,0.75rem)] top-1/2 -translate-y-1/2 flex flex-col gap-[clamp(0.75rem,1.5vw,1.25rem)] z-20">
                      {/* Heart Icon */}
                      <div className="flex flex-col items-center gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                        <svg className="w-[clamp(1.125rem,2.2vw,1.5rem)] h-[clamp(1.125rem,2.2vw,1.5rem)] drop-shadow-lg" fill="#ff3040" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <div className="text-[clamp(0.75rem,1.4vw,0.9rem)] font-semibold text-white drop-shadow-lg">{formatNumber(posts[1].like_count)}</div>
                      </div>
                      {/* Comment Icon */}
                      <div className="flex flex-col items-center gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                        <svg className="w-[clamp(1.125rem,2.2vw,1.5rem)] h-[clamp(1.125rem,2.2vw,1.5rem)] drop-shadow-lg" fill="white" viewBox="0 0 24 24">
                          <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
                        </svg>
                        <div className="text-[clamp(0.75rem,1.4vw,0.9rem)] font-semibold text-white drop-shadow-lg">{formatNumber(posts[1].comments_count)}</div>
                      </div>
                      {/* Share Icon */}
                      <div className="flex flex-col items-center gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                        <svg className="w-[clamp(1.125rem,2.2vw,1.5rem)] h-[clamp(1.125rem,2.2vw,1.5rem)] drop-shadow-lg" fill="white" viewBox="0 0 24 24">
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                        </svg>
                      </div>
                      {/* More Options Icon */}
                      <div className="flex flex-col items-center gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                        <svg className="w-[clamp(1.125rem,2.2vw,1.5rem)] h-[clamp(1.125rem,2.2vw,1.5rem)] drop-shadow-lg" fill="white" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Bottom Text */}
                    <div className="absolute bottom-[clamp(3.5rem,7vw,5rem)] left-[clamp(0.5rem,1vw,0.75rem)] right-[clamp(2.5rem,5vw,4rem)] z-20">
                      <div className="text-[clamp(0.85rem,1.6vw,1rem)] font-semibold text-white mb-[clamp(0.25rem,0.5vw,0.5rem)] drop-shadow-lg">
                        {formatCaption(posts[1].caption)}
                      </div>
                      <div className="text-[clamp(0.75rem,1.4vw,0.9rem)] text-white drop-shadow-lg">
                        {posts[1].caption.match(/#\w+/g)?.slice(0, 3).join(' ') || ''}
                      </div>
                    </div>
                    
                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around bg-black/50 py-[clamp(0.5rem,1vw,0.75rem)] z-20">
                      {/* Home Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="white" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                      {/* Search Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                      </svg>
                      {/* Reels Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M9 8l6 4-6 4V8z"/>
                      </svg>
                      {/* Direct Message Icon */}
                      <div className="relative">
                        <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          <path d="M13 8H3"/>
                          <path d="M17 12H3"/>
                        </svg>
                        <div className="absolute -top-1 -right-1 w-[clamp(0.5rem,0.8vw,0.625rem)] h-[clamp(0.5rem,0.8vw,0.625rem)] bg-red-500 rounded-full border-2 border-black"></div>
                      </div>
                      {/* Profile Icon */}
                      <Image
                        src="/images/akarsh-profile.jpg"
                        alt="Profile"
                        width={24}
                        height={24}
                        className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)] rounded-full object-cover border border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phone 3 - Third Post */}
            {posts[2] && (
              <div className="w-full max-w-[clamp(250px,25vw,350px)] phone-container">
                <div className="relative w-full aspect-[9/19.5] bg-transparent">
                  {/* Phone Border Image */}
                  <Image
                    src="/images/Screen_border.png"
                    alt="iPhone border"
                    fill
                    className="object-contain z-10 pointer-events-none"
                    priority
                    style={{ 
                      filter: 'brightness(1.2) contrast(1.1)',
                      mixBlendMode: 'normal'
                    }}
                  />
                  {/* Instagram Content */}
                  <div className="phone-content bg-black relative">
                    {posts[2].media_type === 'VIDEO' ? (
                      <video
                        src={posts[2].media_url}
                        poster={posts[2].thumbnail_url}
                        className="absolute top-0 left-0 right-0 w-full object-cover video-above-nav"
                        controls
                        autoPlay
                        muted
                        playsInline
                        loop
                      />
                    ) : (
                      <img
                        src={posts[2].media_url}
                        alt={posts[2].caption || 'Instagram post'}
                        className="absolute top-0 left-0 right-0 w-full object-cover img-above-nav"
                      />
                    )}
                    
                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around bg-black py-[clamp(0.5rem,1vw,0.75rem)] z-20">
                      {/* Home Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="white" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                      {/* Search Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                      </svg>
                      {/* Reels Icon */}
                      <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M9 8l6 4-6 4V8z"/>
                      </svg>
                      {/* Direct Message Icon */}
                      <div className="relative">
                        <svg className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          <path d="M13 8H3"/>
                          <path d="M17 12H3"/>
                        </svg>
                        <div className="absolute -top-1 -right-1 w-[clamp(0.5rem,0.8vw,0.625rem)] h-[clamp(0.5rem,0.8vw,0.625rem)] bg-red-500 rounded-full border-2 border-black"></div>
                      </div>
                      {/* Profile Icon */}
                      <Image
                        src="/images/akarsh-profile.jpg"
                        alt="Profile"
                        width={24}
                        height={24}
                        className="w-[clamp(1.25rem,2.2vw,1.5rem)] h-[clamp(1.25rem,2.2vw,1.5rem)] rounded-full object-cover border border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Description Text */}
        <div className="text-center mb-[clamp(2rem,5vw,3rem)]">
          <P className="text-white font-bold max-w-[clamp(600px,80vw,1200px)] mx-auto leading-relaxed">
            Trusted By Celebrities, Global Brands, And Elite Audiences, Aakarsh S Bhat Continues To Redefine The Art Of Illusion Across Stages And Screens Worldwide
          </P>
        </div>

        {/* Instagram Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/illusionistaxe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-bold px-[clamp(2rem,5vw,4rem)] py-[clamp(0.75rem,2vw,1.25rem)] rounded-[clamp(0.5rem,1vw,0.75rem)] hover:bg-yellow-500 transition-colors text-[clamp(1rem,2vw,1.25rem)]"
          >
            See More On Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

