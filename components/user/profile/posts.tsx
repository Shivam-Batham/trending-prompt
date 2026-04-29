// import { CommentIcon, HeartIcon, ShareIcon } from "@/components/ui/postCardElements";

// export default function UserPosts() {
//   const post = []
//   return (
//     <article className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
//       {/* Post media */}
//       {post.media && post.media.length > 0 && (
//         <div className={`grid gap-0.5 ${post.media.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
//           {post.media.slice(0, 4).map((m, i) => (
//             <div
//               key={i}
//               className={`bg-zinc-100 dark:bg-zinc-800 overflow-hidden ${
//                 post.media!.length === 1 ? "aspect-video" : "aspect-square"
//               } ${post.media!.length === 3 && i === 0 ? "row-span-2" : ""}`}
//             >
//               <img
//                 src={m.url}
//                 alt={m.alt ?? "post image"}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Post body */}
//       <div className="p-4 space-y-3">
//         <p className="text-zinc-800 dark:text-zinc-100 text-sm leading-relaxed">
//           {post.content}
//         </p>

//         {/* Tags */}
//         {post.tags && post.tags.length > 0 && (
//           <div className="flex flex-wrap gap-1.5">
//             {post.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-full"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Footer: time + actions */}
//         <div className="flex items-center justify-between pt-1 border-t border-zinc-100 dark:border-zinc-800">
//           <span className="text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">
//             {timeAgo(post.createdAt)}
//           </span>
//           <div className="flex items-center gap-4">
//             <button className="flex items-center gap-1 text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors text-xs group">
//               <HeartIcon  />
//               <span className="tabular-nums group-hover:text-rose-500 dark:group-hover:text-rose-400">
//                 {post.likes.toLocaleString()}
//               </span>
//             </button>
//             <button className="flex items-center gap-1 text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-xs group">
//               <CommentIcon />
//               <span className="tabular-nums">{post.comments.toLocaleString()}</span>
//             </button>
//             <button className="flex items-center gap-1 text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-xs group">
//               <ShareIcon />
//               <span className="tabular-nums">{post.shares.toLocaleString()}</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }