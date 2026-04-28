"use client";

import VerifiedBadge from "@/components/ui/verifiedBadge";
import { fetchUser } from "@/lib/features/user/userApi";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { formatToLocalMonthYear } from "@/utils/postHelper";
import { useEffect } from "react";

export default function UserData() {
  const { user, error, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(!user){
        dispatch(fetchUser());
    }
  }, [dispatch,user]);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Something went wrong.</div>
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="relative h-48 sm:h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <div className="relative -mt-16 mb-4 flex items-end justify-between">
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-4 ring-white dark:ring-zinc-950 overflow-hidden bg-zinc-200 dark:bg-zinc-700 shadow-lg">
              {user && user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user?.name || "User avatar"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-zinc-500 dark:text-zinc-300">
                  {user?.name && user?.name.charAt(0).toUpperCase() || "user"}
                </div>
              )}
            </div>
          </div>

          <button className="mt-20 sm:mt-24 px-5 py-2 rounded-full text-sm font-semibold bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors shadow-sm">
            Follow
          </button>
        </div>

        <div className="space-y-1 mb-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              {user?.name}
            </h1>
            {user?.isVerified && <VerifiedBadge />}
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {user?.email}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
          {user?.location && (
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {user?.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {user?.createdAt &&
              `Joined ${formatToLocalMonthYear(user?.createdAt)}`}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <StatPill label="Posts" value={1} />
          <StatPill label="Followers" value={1} />
          <StatPill label="Following" value={0} />
        </div>
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: number }) {
  const fmt = (n: number) =>
    n >= 1_000_000
      ? `${(n / 1_000_000).toFixed(1)}M`
      : n >= 1_000
        ? `${(n / 1_000).toFixed(1)}K`
        : String(n);

  return (
    <div className="text-center">
      <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tabular-nums leading-tight">
        {fmt(value)}
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mt-0.5">
        {label}
      </p>
    </div>
  );
}
