import { ArrowRight } from "lucide-react";

export default function GotViralPrompt() {
  return (
    <div className="px-16 py-16">
      <div className=" flex flex-col items-center justify-center space-y-1">
        <h1 className="italic text-6xl  font-semibold">
          Got a Winning Prompt?
        </h1>
        <h1 className="italic font-semibold text-[#393939] text-6xl">
          Share It With the Community
        </h1>
        <p className="text-[#393939]">
          Your best prompts could help thousands of creators. Submit yours and
          get
        </p>
        <p className="text-[#393939]"> recognized by the community.</p>

        <div className="flex gap-6 py-2">
          <button className="flex gap-2 border p-2.5 rounded-full bg-[#3D3D3D] border-neutral-800 ">
            Submit Your Prompt <ArrowRight />
          </button>
          <button className="flex gap-2 border p-2.5 rounded-full border-neutral-800">
            Browse All Prompts
          </button>
        </div>
      </div>
    </div>
  );
}
