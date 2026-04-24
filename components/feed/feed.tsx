"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import FeedCard from "./feedcard";
import { fetchFeed } from "@/lib/features/feed/feedAPi";
import GenerateSearchToggle from "./genrateAndSearch";
import SearchBar from "./searchbar";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import Logout from "../auth/logout";

export default function Feed() {
  const { feedData, loading, error } = useAppSelector((state) => state.feed);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="py-6 px-6">
      <div className=" relative">
        <div className="absolute right-0 flex gap-4  p-1 ">
          <div className="p-1 hover:bg-violet-400/30 rounded-full cursor-pointer">
            <Link href={"/user/profile"}>
              <User className=" hover:rounded-full text-violet-400" />
            </Link>
          </div>
          <Logout/>
        </div>
        <div className="flex justify-center mb-2">
          <GenerateSearchToggle />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="py-4">
          <hr className=" border-zinc-700 my-4" />
          <div className="text-center -mt-7.5 ">feed</div>
        </div>
        <div
          className="max-w-2xl mx-auto "
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {feedData.map((post) => (
            <FeedCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
