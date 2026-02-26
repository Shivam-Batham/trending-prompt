import TopTrendingPromptCard from "./topTrendingPromptCard";

export default function TopTrendingPrompts() {
  const arr = [
    {
      id: 1,
      name: "Sarah Chen",
      category: "reels",
      avatar: "https://i.pravatar.cc/80?img=47",
      title: "The 'Day in My Life' Hook",
      decription:
        "Start your reel with: 'POV: You're watching me [activity] and you have no idea what happens next...' This creates instant curiosity and keeps viewers watching.",
      likes: 192,
      saves: 192,
      trending: true,
    },
    {
      id: 2,
      name: "Modi sen",
      category: "Hook",
      avatar: "https://i.pravatar.cc/80?img=48",
      title: "The 'Day in My Life' Hook",
      decription:
        "Start your reel with: 'POV: You're watching me [activity] and you have no idea what happens next...' This creates instant curiosity and keeps viewers watching.",
      likes: 192,
      saves: 192,
      trending: true,
    },
    {
      id: 3,
      name: "Jyuen",
      category: "Hook",
      avatar: "https://i.pravatar.cc/80?img=40",
      title: "The 'Day in My Life' Hook",
      decription:
        "Start your reel with: 'POV: You're watching me [activity] and you have no idea what happens next...' This creates instant curiosity and keeps viewers watching.",
      likes: 192,
      saves: 192,
      trending: true,
    },
    {
      id: 4,
      name: " sen",
      category: "Hook",
      avatar: "https://i.pravatar.cc/80?img=49",
      title: "The 'Day in My Life' Hook",
      decription:
        "Start your reel with: 'POV: You're watching me [activity] and you have no idea what happens next...' This creates instant curiosity and keeps viewers watching.",
      likes: 192,
      saves: 192,
      trending: true,
    },
  ];

  return (
    <div className="px-4 lg:px-16 py-5 bg-[#0C0C0C]">
      <div>
        <h1 className="text-[32px] italic">Trending Prompts</h1>
        <p>The most popular prompts this week, Voted by community</p>
      </div>
      <div className="grid lg:grid-cols-4 gap-2 py-5">
        {arr.map((item) => (
          <div key={item.id}>
            <TopTrendingPromptCard
              avatar={item.avatar}
              name={item.name}
              category={item.category}
              trending={item.trending}
              title={item.title}
              description={item.decription}
              likes={item.likes}
              saves={item.saves}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
