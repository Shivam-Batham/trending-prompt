
import Footer from "@/components/home/footer";
import GotViralPrompt from "@/components/home/gotViralPrompt";
import HeroSection from "@/components/home/hero";
import HowItWorks from "@/components/home/howItWorks";
import KPI from "@/components/home/KPI";
import HomeNavbar from "@/components/home/navbar";
import PromptKPI from "@/components/home/promptKPI";
import TopTrendingPrompts from "@/components/home/topTrending";
import getServerHealth from "@/utils/serverHealth";

export default async function Home() {
  const server = await getServerHealth();
  return (
    <>
      <HomeNavbar/>
      <HeroSection/>
      <PromptKPI/>
      <TopTrendingPrompts/>
      <HowItWorks/>
      <KPI/>
      <GotViralPrompt/>
      <Footer/>
    </>
  );
}
