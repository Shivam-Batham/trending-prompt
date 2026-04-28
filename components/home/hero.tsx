import { ArrowRight } from "lucide-react";
import HomeTrending4cards from "../ui/homeTrending4cards";

export default function HeroSection() {
  const position = {
    top: "",
    bottom: "bottom-20",
    left: "left-25",
    right: "",
    rotate: "rotate-45",
    img: "",
  };
  const position2 = {
    top: "top-16",
    bottom: "",
    left: "left-25",
    right: "",
    rotate: "rotate-45",
    img: "",
  };
  const position3 = {
    top: "top-16",
    bottom: "",
    left: "",
    right: "right-25",
    rotate: "-rotate-45",
    img: "",
  };
  const position4 = {
    top: "",
    bottom: "bottom-20",
    left: "",
    right: "right-25",
    rotate: "-rotate-45",
    img: "",
  };
  return (
    <div className="relative w-full bg-[#1A1A1A] h-screen overflow-hidden">
      <HomeTrending4cards {...position2} />
      <HomeTrending4cards {...position} />
      <HomeTrending4cards {...position3} />
      <HomeTrending4cards {...position4} />
      <div className="relative mx-auto h-full space-y-4 w-fit flex flex-col items-center justify-center">
        <h1 className="italic text-[32px] lg:text-[64px] ">Trending Prompt</h1>
        <p className="text-sm lg:text-[20px] text-center">
          Community-curated prompts for captions, reels, hooks, and content
          ideas.
          <br /> Discover what's trending and create content that engages.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          <div className="bg-linear-to-b from-[#979797] via-transparent to-[#424242] rounded-full p-px">
            <button className="bg-linear-to-b from-[#272727]  to-[#414141] inset-0 px-4 py-2.5 rounded-full flex gap-2 ">
              Explore Prompts <ArrowRight />
            </button>
          </div>
          <div className="bg-linear-to-b from-[#979797] via-transparent to-[#424242] rounded-full p-px">
            <button className="bg-[#111111] px-10 py-2.5 rounded-full">
              Post a Prompt
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bg-linear-to-l from-black via-transparent to-black inset-0"></div>
    </div>
  );
}
