import Image from "next/image";
import logo from "@/public/logo.png"
export default function Footer(){

    return (<div className="px-16 py-16 bg-[#1A1A1A]">
        <div className="w-[345px] space-y-4">
            <div className="flex gap-4"><Image src={logo} alt="logo" width={32} height={32}/> Trendy Prompt</div>
            <div>The community-driven platform for discovering and sharing high-performing Trending prompts.</div>
            <div></div>
        </div>
        <div></div>

    </div>)
}