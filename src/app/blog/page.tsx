import Card from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Schema optimization insights, rich results guides, and structured data best practices for SEO professionals.",
};

const posts = [
    {
        slug: "why-rich-results-dont-show",
        title: "Why Your Rich Results Don't Show (Even When Schema Validates)",
        excerpt:
            "Your schema passes every test, but Google ignores it. Here's what validators don't tell you about rich result eligibility.",
        date: "2026-02-01",
        readTime: "8 min read",
        category: "Rich Results",
    },
    {
        slug: "schema-mistakes-nextjs",
        title: "5 Schema Mistakes Every Next.js Developer Makes",
        excerpt:
            "Client-side rendering, hydration timing, and App Router pitfalls that break your structured data without any warnings.",
        date: "2026-01-28",
        readTime: "6 min read",
        category: "Frameworks",
    },
    {
        slug: "entity-seo-ai-search",
        title: "Entity SEO for AI Search: Why Schema Matters More Now",
        excerpt:
            "As search becomes AI-powered, structured data isn't optional — it's how you get cited in AI answers.",
        date: "2026-01-22",
        readTime: "10 min read",
        category: "Strategy",
    },
    {
        slug: "softwareapplication-schema-guide",
        title: "The Complete SoftwareApplication Schema Guide for SaaS",
        excerpt:
            "Every property explained: what's required, what's recommended, and what actually affects your search visibility.",
        date: "2026-01-15",
        readTime: "12 min read",
        category: "Guides",
    },
    {
        slug: "local-business-schema-mistakes",
        title: "Local Business Schema: Stop Making These Common Mistakes",
        excerpt:
            "Opening hours, service areas, and the properties that Google actually uses for local pack results.",
        date: "2026-01-10",
        readTime: "7 min read",
        category: "Local SEO",
    },
    {
        slug: "faq-schema-when-to-use",
        title: "FAQ Schema: When to Use It (And When It Hurts)",
        excerpt:
            "FAQ rich results aren't showing for everyone anymore. Here's when FAQ schema still works and when to skip it.",
        date: "2026-01-05",
        readTime: "5 min read",
        category: "Rich Results",
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-sm border-b border-border">
                <div className="container-narrow text-center">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl">Blog</h1>
                    <p className="text-lg text-foreground-muted">
                        Schema optimization insights from the team building the intelligence
                        platform.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section-sm">
                <div className="container-wide">
                    <Link href={`/blog/${posts[0].slug}`}>
                        <Card padding="lg" hover className="lg:p-12">
                            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <div className="mb-4 flex items-center gap-4">
                                        <span className="badge badge-info">{posts[0].category}</span>
                                        <span className="text-sm text-foreground-subtle">
                                            {posts[0].date}
                                        </span>
                                    </div>
                                    <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
                                        {posts[0].title}
                                    </h2>
                                    <p className="mb-4 text-foreground-muted">{posts[0].excerpt}</p>
                                    <span className="text-sm text-foreground-subtle">
                                        {posts[0].readTime}
                                    </span>
                                </div>
                                <div className="aspect-video rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-green/20" />
                            </div>
                        </Card>
                    </Link>
                </div>
            </section>

            {/* Post Grid */}
            <section className="section">
                <div className="container-wide">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.slice(1).map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card padding="none" hover className="h-full">
                                    <div className="aspect-video rounded-t-lg bg-gradient-to-br from-surface-2 to-surface-3" />
                                    <div className="p-6">
                                        <div className="mb-3 flex items-center gap-4">
                                            <span className="badge badge-info">{post.category}</span>
                                            <span className="text-xs text-foreground-subtle">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="mb-2 font-semibold leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="mb-4 text-sm text-foreground-muted line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-xs text-foreground-subtle">
                                            {post.readTime}
                                        </span>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section bg-surface-1 border-t border-border">
                <div className="container-narrow text-center">
                    <h2 className="mb-4 text-2xl font-bold">Stay in the loop</h2>
                    <p className="mb-8 text-foreground-muted">
                        Weekly insights on schema optimization, rich results, and structured
                        data strategy.
                    </p>
                    <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="input flex-1"
                        />
                        <button type="submit" className="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        name: "SIP Blog",
                        description:
                            "Schema optimization insights and structured data best practices.",
                        publisher: {
                            "@type": "Organization",
                            name: "Schema Intelligence Platform",
                        },
                        blogPost: posts.map((post) => ({
                            "@type": "BlogPosting",
                            headline: post.title,
                            description: post.excerpt,
                            datePublished: post.date,
                            url: `https://sip.dev/blog/${post.slug}`,
                        })),
                    }),
                }}
            />
        </>
    );
}
