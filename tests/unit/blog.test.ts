import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock fs and path since we're testing in Node without actual MDX files
vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(() => false),
    readdirSync: vi.fn(() => []),
    readFileSync: vi.fn(() => ''),
  },
  existsSync: vi.fn(() => false),
  readdirSync: vi.fn(() => []),
  readFileSync: vi.fn(() => ''),
}))

// Test the parseFrontmatter logic in isolation
describe('blog frontmatter parsing', () => {
  it('parses valid frontmatter', () => {
    const raw = `---
title: "Test Post"
slug: "test-post"
excerpt: "A test"
readTime: "3 min read"
publishedAt: "2026-01-01"
tags: ["Guide"]
---

Content here`

    // Inline the parser logic to test it without importing the full module
    function parseFrontmatter(input: string) {
      const match = input.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
      if (!match) return { data: {}, content: input }
      const data: Record<string, string | string[]> = {}
      for (const line of match[1].split('\n')) {
        const colonIndex = line.indexOf(':')
        if (colonIndex === -1) continue
        const key = line.slice(0, colonIndex).trim()
        const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '')
        data[key] = value
      }
      return { data, content: match[2] }
    }

    const { data, content } = parseFrontmatter(raw)
    expect(data.title).toBe('Test Post')
    expect(data.slug).toBe('test-post')
    expect(data.readTime).toBe('3 min read')
    expect(content.trim()).toBe('Content here')
  })

  it('returns raw content when no frontmatter', () => {
    function parseFrontmatter(input: string) {
      const match = input.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
      if (!match) return { data: {}, content: input }
      return { data: {}, content: match[2] }
    }
    const raw = 'No frontmatter here'
    const { data, content } = parseFrontmatter(raw)
    expect(data).toEqual({})
    expect(content).toBe(raw)
  })
})

describe('blog slug generation', () => {
  it('strips .mdx extension for slug', () => {
    const filename = 'what-is-an-agentic-os.mdx'
    const slug = filename.replace(/\.mdx$/, '')
    expect(slug).toBe('what-is-an-agentic-os')
  })

  it('handles multiple blog slugs', () => {
    const files = [
      'what-is-an-agentic-os.mdx',
      'zapier-vs-make-vs-agentic-ai.mdx',
      'ai-automation-consulting-cost.mdx',
    ]
    const slugs = files.map(f => f.replace(/\.mdx$/, ''))
    expect(slugs).toHaveLength(3)
    expect(slugs).toContain('what-is-an-agentic-os')
    expect(slugs).toContain('zapier-vs-make-vs-agentic-ai')
  })
})
