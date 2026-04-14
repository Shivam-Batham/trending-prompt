const MODEL_COLORS: Record<string, string> = {
  "gpt-4":       "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "gpt-4o":      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "claude":      "bg-orange-500/10  text-orange-400  border-orange-500/20",
  "dalle":       "bg-purple-500/10  text-purple-400  border-purple-500/20",
  "midjourney":  "bg-pink-500/10    text-pink-400    border-pink-500/20",
  "gemini":      "bg-blue-500/10    text-blue-400    border-blue-500/20",
  "stable":      "bg-yellow-500/10  text-yellow-400  border-yellow-500/20",
  default:       "bg-slate-500/10   text-slate-400   border-slate-500/20",
};

export default function modelColor(model?: string): string {
  if (!model) return MODEL_COLORS.default;
  const key = Object.keys(MODEL_COLORS).find((k) =>
    model.toLowerCase().includes(k)
  );
  return key ? MODEL_COLORS[key] : MODEL_COLORS.default;
}