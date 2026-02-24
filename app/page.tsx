
import getServerHealth from "@/utils/serverHealth";

export default async function Home() {
  const server = await getServerHealth();
  return (
    <>
      <h1 className="text-center text-4xl">Landing Page</h1>
      <h2>{JSON.stringify(server)}</h2>
    </>
  );
}
