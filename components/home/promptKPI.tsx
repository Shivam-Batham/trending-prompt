import { ArrowRight, Bot, MessageSquare, TrendingUp, Video, Zap } from "lucide-react";

export default function PromptKPI() {
  return (
    <div className="bg-[#0C0C0C] flex px-16 py-5 gap-4">
      <div className="bg-[#3D3D3D] px-10 py-2.5 rounded-full border flex gap-2 items-center"> All Prompt <ArrowRight/></div>
      <div className="bg-[#111111] px-10 py-2.5 rounded-full border flex gap-2 items-center"><Video/>  Reels 3,421 </div>
      <div className="bg-[#111111] px-10 py-2.5 rounded-full border flex gap-2 items-center">
       <MessageSquare/> Captions 2,432
      </div>
      <div className="bg-[#111111] px-10 py-2.5 rounded-full border flex gap-2 items-center">  <Zap/> Hooks 532</div>
      <div className="bg-[#111111] px-10 py-2.5 rounded-full border flex gap-2 items-center"><TrendingUp/> Growth 432 </div>
      <div className="bg-[#111111] px-10 py-2.5 rounded-full border flex gap-2 items-center"><Bot/> AI 1,432</div>
    </div>
  );
}
