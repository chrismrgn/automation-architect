import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getAllSlugs } from "@/lib/blog";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Automation Architects`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
  });

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="bg-[#252F3A] min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex lg:gap-12">
          {/* Main content */}
          <article className="flex-1 max-w-[720px] mx-auto lg:mx-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-[#8399AE] hover:text-[#F5F0EB] transition-colors mb-8"
            >
              <ArrowLeft className="h-3 w-3" /> Back to blog
            </Link>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-[#6C47FF]/10 text-[#8399AE]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#8399AE]">
                <span>Automation Architects Team</span>
                <span className="hidden sm:inline">&middot;</span>
                <span>{post.readTime}</span>
                <span className="hidden sm:inline">&middot;</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="blog-prose">{content}</div>

            {/* CTA at end of post */}
            <div className="mt-12 border-t-2 border-t-[#6C47FF] bg-[#6C47FF]/5 p-8 text-center">
              <h3 className="text-xl font-bold text-[#F5F0EB] mb-2">
                Ready to automate your business?
              </h3>
              <p className="text-[#8399AE] text-sm mb-4">
                Book a free 30-minute AI Audit and see exactly what&apos;s
                automatable.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-6 py-3 text-sm font-medium transition-colors rounded-[2px]"
              >
                Book Your Free Audit <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Sticky sidebar CTA — desktop only */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28">
              <div className="border border-[#3C4C5C] bg-[#2E3B47] p-6">
                <h4 className="font-semibold text-[#F5F0EB] mb-2">
                  Ready to automate?
                </h4>
                <p className="text-sm text-[#8399AE] mb-4">
                  Book a free 30-minute AI Audit. We&apos;ll map every
                  automatable task in your business.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 w-full justify-center bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-4 py-3 text-sm font-medium transition-colors rounded-[2px]"
                >
                  Book a Free Audit <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-[#3C4C5C] pt-12">
            <h3 className="text-2xl font-bold text-[#F5F0EB] mb-6">
              Keep reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group border-t border-[#3C4C5C] pt-6 hover:bg-[#2E3B47]/50 transition-colors p-6"
                >
                  <h4 className="font-semibold text-[#F5F0EB] mb-2 group-hover:text-[#6C47FF] transition-colors">
                    {rp.title}
                  </h4>
                  <p className="text-sm text-[#8399AE] line-clamp-2 mb-3">
                    {rp.excerpt}
                  </p>
                  <span className="text-xs text-[#8399AE]">{rp.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
