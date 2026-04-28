



const HeartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CommentIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);



export default function UserPosts() {
  return (
    <article className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      {/* Post media */}
      {post.media && post.media.length > 0 && (
        <div className={`grid gap-0.5 ${post.media.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {post.media.slice(0, 4).map((m, i) => (
            <div
              key={i}
              className={`bg-zinc-100 dark:bg-zinc-800 overflow-hidden ${
                post.media!.length === 1 ? "aspect-video" : "aspect-square"
              } ${post.media!.length === 3 && i === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={m.url}
                alt={m.alt ?? "post image"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Post body */}
      <div className="p-4 space-y-3">
        <p className="text-zinc-800 dark:text-zinc-100 text-sm leading-relaxed">
          {post.content}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer: time + actions */}
        <div className="flex items-center justify-between pt-1 border-t border-zinc-100 dark:border-zinc-800">
          <span className="text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">
            {timeAgo(post.createdAt)}
          </span>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-zinc-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors text-xs group">
              <HeartIcon />
              <span className="tabular-nums group-hover:text-rose-500 dark:group-hover:text-rose-400">
                {post.likes.toLocaleString()}
              </span>
            </button>
            <button className="flex items-center gap-1 text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-xs group">
              <CommentIcon />
              <span className="tabular-nums">{post.comments.toLocaleString()}</span>
            </button>
            <button className="flex items-center gap-1 text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors text-xs group">
              <ShareIcon />
              <span className="tabular-nums">{post.shares.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}