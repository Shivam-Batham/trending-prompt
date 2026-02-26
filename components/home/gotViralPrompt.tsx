import { ArrowRight } from "lucide-react";

export default function GotViralPrompt() {
  return (
    <div className="px-4 lg:px-16 py-16">
      <div className=" flex flex-col items-center justify-center space-y-1">
        <h1 className="italic text-4xl font-bold lg:text-6xl  lg:font-bold">
          Got a Winning Prompt?
        </h1>
        <h1 className="italic  text-4xl font-bold lg:text-6xl  lg:font-bold text-[#393939]  ">
          Share It With the Community
        </h1>
        <p className="text-[#393939]">
          Your best prompts could help thousands of creators. Submit yours and
          get <br />
          recognized by the community.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 py-2">
          <button className="flex items-center justify-center  gap-2 border p-2.5 rounded-full bg-[#3D3D3D] border-neutral-800 ">
            Submit Your Prompt <ArrowRight />
          </button>
          <button className="flex items-center justify-center gap-2 border p-2.5 rounded-full border-neutral-800">
            Browse All Prompts
          </button>
        </div>
      </div>
    </div>
  );
}
