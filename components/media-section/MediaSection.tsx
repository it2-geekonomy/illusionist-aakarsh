"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { H1, P } from "@/components/typography/typography";

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
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
        const res = await fetch("/api/instagram/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading posts");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const formatCaption = (caption: string) =>
    caption
      ? caption.split("\n")[0].slice(0, 50) +
      (caption.length > 50 ? "..." : "")
      : "";

  const formatNumber = (num: number) =>
    num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();

  return (
    <section className="w-full bg-black">
      <div className="max-w-[1800px] mx-auto px-[clamp(1rem,4vw,3rem)] py-[clamp(2rem,5vw,4rem)]">

        {/* TITLE */}
        <div className="text-center mb-14">
          <H1 className="text-yellow-400">MEDIA</H1>
        </div>

        {loading && <P className="text-white text-center">Loading...</P>}
        {error && <P className="text-red-400 text-center">{error}</P>}

        {!loading && !error && (
          <div
            className="
              grid grid-cols-1 justify-items-center
              gap-10
              lg:grid-cols-3
              lg:gap-16
              mb-20
            "
          >
            {posts.slice(0, 3).map((post, index) => (
              <div
                key={post.id}
                className="w-full max-w-[360px] flex justify-center"
              >
                <div className="relative w-full aspect-[9/19.5]">

                  {/* PHONE FRAME */}
                  <Image
                    src="/images/Screen_border.png"
                    alt="Phone frame"
                    fill
                    priority
                    className="object-contain z-20 pointer-events-none"
                  />

                  {/* PHONE CONTENT */}
                  <div
                    className="
                      absolute
                      top-[7%] bottom-[7%]
                      left-[6%] right-[6%]
                      rounded-[2rem]
                      bg-black
                      overflow-hidden
                      z-10
                      flex flex-col
                    "
                  >
                    {/* ===== INSTAGRAM HEADER (ONLY FIRST PHONE) ===== */}
                    {index === 0 && (
                      <div className="border-b border-gray-700">

                        {/* Top Row */}
                        <div className="flex items-center justify-between px-3 py-2">
                          <span className="text-white font-bold text-lg">
                            Instagram
                          </span>

                          <div className="flex gap-4">
                            {/* DM */}
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>

                            {/* Plus */}
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          </div>
                        </div>

                        {/* Profile Row */}
                        <div className="flex items-center gap-3 px-3 py-2">
                          <Image
                            src="/images/akarsh-profile.jpg"
                            alt="illusionistaxe"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                          <span className="text-white font-semibold text-sm">
                            illusionistaxe
                          </span>
                        </div>
                      </div>
                    )}

                    {/* ===== MEDIA ===== */}
                    <div className="flex-1 overflow-hidden">
                      {post.media_type === "VIDEO" ? (
                        <video
                          src={post.media_url}
                          poster={post.thumbnail_url}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          className={`w-full ${index === 0
                              ? "object-contain"
                              : "object-cover h-full"
                            }`}
                        />
                      ) : (
                        <img
                          src={post.media_url}
                          alt="Instagram post"
                          className={`w-full ${index === 0
                              ? "object-contain"
                              : "object-cover h-full"
                            }`}
                        />
                      )}
                    </div>

                    {/* ===== CAPTION (FIRST PHONE ONLY) ===== */}
                    {index === 0 && (
                      <div className="p-3 text-white text-sm">
                        <div className="font-semibold mb-1">
                          {formatNumber(post.like_count)} likes
                        </div>
                        <div>
                          <span className="font-semibold">
                            illusionistaxe
                          </span>{" "}
                          {formatCaption(post.caption)}
                        </div>
                      </div>
                    )}

                    {/* ===== BOTTOM NAV ===== */}
                    <div className="flex justify-around items-center py-2 border-t border-gray-700">
                      <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M9 8l6 4-6 4V8z" />
                      </svg>
                      <Image
                        src="/images/akarsh-profile.jpg"
                        alt="Profile"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DESCRIPTION */}
        <div className="text-center mb-10">
          <P className="text-white font-bold max-w-5xl mx-auto">
            Trusted By Celebrities, Global Brands, And Elite Audiences,
            Aakarsh S Bhat Continues To Redefine The Art Of Illusion Across
            Stages And Screens Worldwide
          </P>
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/illusionistaxe/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block bg-yellow-400 text-black font-bold
              px-10 py-4 rounded-lg
              hover:bg-yellow-500 transition
            "
          >
            See More On Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
