import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full bg-[#1A1A1A] h-screen">
      <div className=" mx-auto h-full space-y-4 w-fit flex flex-col items-center justify-center">
        <h1  className="italic text-[32px] lg:text-[64px] ">Trending Prompt</h1>
        <p className="text-sm lg:text-[20px] text-center">
          Community-curated prompts for captions, reels, hooks, and content ideas.<br/> Discover what's trending and create content that engages.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          <button className="bg-[#3D3D3D] px-4 py-2.5 rounded-full flex gap-2">Explore Prompts <ArrowRight/></button>
          <button className="bg-[#111111] px-10 py-2.5 rounded-full">Post a Prompt</button>
        </div>
      </div>
    </div>
  );
}
