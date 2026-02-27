import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Automation Architects",
  description:
    "Insights on AI automation, agentic systems, and building smarter businesses.",
  openGraph: {
    title: "Blog — Automation Architects",
    description:
      "Insights on AI automation, agentic systems, and building smarter businesses.",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#0A0A0F] min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F0F0FF] mb-4">
            From the blog
          </h1>
          <p className="text-[#8888AA] text-lg max-w-xl mx-auto">
            Practical insights on AI automation for growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-[#1E1E2E] bg-[#13131A] p-6 hover:border-[#6C47FF]/30 transition-colors flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-[#6C47FF]/10 text-[#A0A0BB]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-semibold text-[#F0F0FF] mb-2 group-hover:text-[#6C47FF] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#A0A0BB] leading-relaxed mb-4 flex-1 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8888AA]">{post.readTime}</span>
                <span className="text-sm text-[#6C47FF] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
