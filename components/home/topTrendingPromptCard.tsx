"use client";
import { useState } from "react";

export default function TopTrendingPromptCard({
  avatar,
  name,
  category,
  trending,
  title,
  description,
  saves,
  likes,
}: {
  avatar: string;
  name: string;
  category: string;
  trending: boolean;
  title: string;
  description: string;
  saves: number;
  likes: number;
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [saveCount, setSaveCount] = useState(saves);

  const handleCopy = () => {
    navigator.clipboard?.writeText(description);
    setCopied(true);
    // onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  const handleSave = () => {
    setSaved((prev) => !prev);
    setSaveCount((prev) => prev + (saved ? -1 : 1));
  };

  return (
    <div className="bg-[#010101] border border-neutral-800 rounded-2xl p-7 max-w-md w-full shadow-2xl hover:-translate-y-0.5 transition-transform duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-neutral-800 shrink-0"
          />
          <div>
            <p className="text-neutral-100 font-semibold text-base italic leading-tight">
              {name}
            </p>
            <p className="text-neutral-500 text-sm mt-0.5">{category}</p>
          </div>
        </div>
        {trending && (
          <span className="bg-green-950 border border-green-800 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
            Trending
          </span>
        )}
      </div>

      <h2 className="text-neutral-100 text-2xl font-semibold leading-snug mb-3 tracking-tight">
        {title}
      </h2>
      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="border-t border-neutral-800 mb-5" />

      <div className="flex items-center gap-1">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-150 hover:bg-neutral-800 active:scale-95 cursor-pointer ${
            liked ? "text-red-400" : "text-neutral-500 hover:text-neutral-300"
          }`}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {likeCount}
        </button>

        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-150 hover:bg-neutral-800 active:scale-95 cursor-pointer ${
            saved ? "text-blue-400" : "text-neutral-500 hover:text-neutral-300"
          }`}
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 24 24"
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          {saveCount}
        </button>

        <div className="flex-1" />

        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-150 active:scale-95 cursor-pointer ${
            copied
              ? "bg-green-950 border-green-800 text-green-400"
              : "bg-neutral-900 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-600 hover:text-neutral-100"
          }`}
        >
          {copied ? (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              copied!
            </>
          ) : (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
