"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import FeedCard from "./feedcard";
import { fetchFeed } from "@/lib/features/feed/feedAPi";

export default function Feed() {
  const { feedData, loading, error } = useAppSelector((state) => state.feed);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="py-6">
      <div
      className="max-w-2xl mx-auto "
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      {feedData.map((post) => (
        <FeedCard key={post._id} post={post} />
      ))}
    </div>
    </div>
  );
}
