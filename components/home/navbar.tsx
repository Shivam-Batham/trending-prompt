import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
export default function HomeNavbar() {
  return (
    <>
      <div className="w-full h-20 flex justify-between p-4">
        <div className=" flex object-cover">
          <Image alt="logo" src={logo} height={20} width={50} />
        </div>
        <div className="hidden lg:flex items-center  space-x-10 ">
          <div className="cursor-pointer hover:text-white"><Link href={"/feed"}>Trending</Link></div>
          <div className="cursor-pointer hover:text-white"><Link href={"/feed"}>Category</Link></div>
          <div className="cursor-pointer hover:text-white"><Link href={"#how-it-works"}>How it works</Link></div>
        </div>
        <div className="bg-linear-to-b from-[#C9C9C9] via-transparent to-[#414141] rounded-full p-px">
          <button className="bg-linear-to-b from-[#ffffff]  to-[#999999] h-full px-3 py-1 rounded-full  text-black italic font-normal text-2xl">
            <Link href={"/login"}>Get Started</Link>
          </button>
        </div>
      </div>
    </>
  );
}
