import { Search } from "lucide-react";

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-[#0C0C0C] px-4 lg:px-16 py-5">
      <div className="flex  flex-col lg:justify-center  lg:items-center">
        <h1  className="text-[32px] italic">How It's Works</h1>
        <p>Get started in seconds.</p>
      </div>

      <div className="  flex flex-col lg:flex-row gap-2 items-center justify-between  py-5">
        <div className="border bg-[#010101] border-neutral-800 p-4 lg:w-80 rounded-xl space-y-3">
          <div className="p-2 bg-[#272727] rounded-lg w-fit">
            <Search />
          </div>
          <h3>Discover Trending Prompts</h3>
          <p className="text-xs">
            Browse through our curated collection of high-performing Instagram
            prompts, filtered by category, popularity, and recency.
          </p>
        </div>

        <div className="border bg-[#010101] border-neutral-800 p-4 lg:w-80 rounded-xl space-y-3">
          <div className="p-2 bg-[#272727] rounded-lg w-fit">
            <Search />
          </div>
          <h3>Discover Trending Prompts</h3>
          <p className="text-xs">
            Browse through our curated collection of high-performing Instagram
            prompts, filtered by category, popularity, and recency.
          </p>
        </div>

        <div className="border border-neutral-800 p-4 lg:w-80 rounded-xl space-y-3 bg-[#010101]">
          <div className="p-2 bg-[#272727] rounded-lg w-fit">
            <Search />
          </div>
          <h3>Discover Trending Prompts</h3>
          <p className="text-xs">
            Browse through our curated collection of high-performing Instagram
            prompts, filtered by category, popularity, and recency.
          </p>
        </div>

        <div className="border bg-[#010101] border-neutral-800 p-4 lg:w-80 rounded-xl space-y-3">
          <div className="p-2 bg-[#272727] rounded-lg w-fit">
            <Search />
          </div>
          <h3>Discover Trending Prompts</h3>
          <p className="text-xs">
            Browse through our curated collection of high-performing Instagram
            prompts, filtered by category, popularity, and recency.
          </p>
        </div>
      </div>

      <div>
        <div className=" w-full overflow-auto">
          <h2 className="text-[32px] italic">Why Creators Choose us</h2>
          <p className="lg:w-165 text-sm ">
            Stop guessing what works. Our community of 12,000+ creators shares
            their best-performing prompts so you can create content that
            actually engages.
          </p>
        </div>

        <div className="space-y-2 py-6">
          <div className="flex gap-4">
            <div className="p-2 bg-[#272727] rounded-lg size-10">
              <Search />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg italic">Community-Driven</h3>
              <p className="text-xs">
                Every prompt is submitted and voted on by real creators. The
                best content rises to the top.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-2 size-10 bg-[#272727] rounded-lg">
              <Search />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg italic">Performance-Based</h3>
              <p className="text-xs">
                Prompts are ranked by actual engagement metrics. See what's
                working right now.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-2 size-10 bg-[#272727] rounded-lg">
              <Search />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg italic">Constantly Updated</h3>
              <p className="text-xs">
                New trending prompts added daily. Stay ahead of algorithm changes and trends.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-2 size-10 bg-[#272727] rounded-lg">
              <Search />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg italic">Quality Curated</h3>
              <p className="text-xs">
               Every prompt is reviewed for quality. No spam, no fluff—just what works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
