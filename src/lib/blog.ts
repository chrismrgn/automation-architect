import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function parseFrontmatter(raw: string): {
  data: Record<string, string | string[]>;
  content: string;
} {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string | string[]> = {};
  const lines = match[1].split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (value.startsWith("[")) {
      try {
        data[key] = JSON.parse(value);
      } catch {
        data[key] = value;
      }
    } else {
      data[key] = value;
    }
  }

  return { data, content: match[2] };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = parseFrontmatter(raw);
      return {
        title: (data.title as string) || "",
        slug: (data.slug as string) || file.replace(".mdx", ""),
        excerpt: (data.excerpt as string) || "",
        readTime: (data.readTime as string) || "5 min read",
        publishedAt: (data.publishedAt as string) || "",
        tags: (data.tags as string[]) || [],
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) || null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
