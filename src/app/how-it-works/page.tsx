import Card from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works",
    description:
        "Learn how SIP analyzes your schema markup and provides actionable recommendations to improve rich result eligibility.",
};

export default function HowItWorksPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-sm border-b border-border">
                <div className="container-narrow text-center">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                        How Schema Intelligence Works
                    </h1>
                    <p className="text-lg text-foreground-muted">
                        From URL to actionable insights in three steps. Here&apos;s the
                        methodology behind our analysis.
                    </p>
                </div>
            </section>

            {/* Step 1: Extraction */}
            <section className="section">
                <div className="container-wide">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue text-xl font-bold text-white">
                                1
                            </div>
                            <h2 className="mb-4 text-2xl font-bold">Extraction</h2>
                            <p className="mb-6 text-foreground-muted">
                                We fetch your page server-side and extract all structured data
                                markup, including JSON-LD, microdata, and RDFa.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>JSON-LD parsing</strong> — Extract and validate all
                                        script blocks
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Microdata detection</strong> — Find itemscope and
                                        itemtype attributes
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Entity normalization</strong> — Unified graph from
                                        all sources
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <Card padding="lg" className="bg-surface-2">
                            <pre className="overflow-x-auto text-sm font-mono text-foreground-muted">
                                {`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Your App",
  "applicationCategory": "..."
}
</script>`}
                            </pre>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Step 2: Analysis */}
            <section className="section bg-surface-1 border-y border-border">
                <div className="container-wide">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <Card padding="lg" className="order-2 lg:order-1">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between rounded-lg bg-surface-2 p-4">
                                    <span className="font-medium">Entity Clarity</span>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-24 rounded-full bg-surface-3">
                                            <div className="h-full w-4/5 rounded-full bg-accent-green" />
                                        </div>
                                        <span className="text-sm">80</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-surface-2 p-4">
                                    <span className="font-medium">Rich Result Alignment</span>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-24 rounded-full bg-surface-3">
                                            <div className="h-full w-3/5 rounded-full bg-accent-amber" />
                                        </div>
                                        <span className="text-sm">60</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-surface-2 p-4">
                                    <span className="font-medium">Relationship Depth</span>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-24 rounded-full bg-surface-3">
                                            <div className="h-full w-1/2 rounded-full bg-accent-amber" />
                                        </div>
                                        <span className="text-sm">50</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div className="order-1 lg:order-2">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue text-xl font-bold text-white">
                                2
                            </div>
                            <h2 className="mb-4 text-2xl font-bold">Interpretation</h2>
                            <p className="mb-6 text-foreground-muted">
                                We don&apos;t just validate — we interpret. Our rules engine
                                evaluates your schema against what actually triggers rich
                                results.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Rich result mapping</strong> — Which results are you
                                        eligible for?
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Confidence scoring</strong> — How likely is Google
                                        to show them?
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Framework detection</strong> — Next.js, React,
                                        client-side issues
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3: Recommendations */}
            <section className="section">
                <div className="container-wide">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue text-xl font-bold text-white">
                                3
                            </div>
                            <h2 className="mb-4 text-2xl font-bold">Actionable Fixes</h2>
                            <p className="mb-6 text-foreground-muted">
                                No vague suggestions. We tell you exactly what to change and
                                provide copy-paste JSON-LD fixes.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Prioritized fixes</strong> — Highest impact changes
                                        first
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Generated JSON-LD</strong> — Copy and deploy
                                        immediately
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-accent-green"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span>
                                        <strong>Business-context aware</strong> — Recommendations
                                        tailored to your type
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <Card padding="lg" className="bg-surface-2">
                            <div className="space-y-4">
                                <div className="rounded-lg border border-accent-red/30 bg-accent-red-glow p-4">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="badge badge-conflict">High</span>
                                        <span className="font-medium">Add applicationCategory</span>
                                    </div>
                                    <p className="text-sm text-foreground-muted">
                                        Required for SoftwareApplication rich results
                                    </p>
                                </div>
                                <div className="rounded-lg border border-accent-amber/30 bg-accent-amber-glow p-4">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="badge badge-weak">Medium</span>
                                        <span className="font-medium">Add offers property</span>
                                    </div>
                                    <p className="text-sm text-foreground-muted">
                                        Enables pricing display in search results
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Valid ≠ Effective */}
            <section className="section bg-surface-1 border-y border-border">
                <div className="container-narrow text-center">
                    <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                        Why &ldquo;Valid&rdquo; ≠ &ldquo;Effective&rdquo;
                    </h2>
                    <p className="mb-8 text-foreground-muted">
                        Google&apos;s Rich Results Test checks syntax. It doesn&apos;t tell
                        you:
                    </p>
                    <div className="grid gap-6 text-left md:grid-cols-2">
                        <Card padding="lg">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-red-glow text-accent-red">
                                ✗
                            </div>
                            <h3 className="mb-2 font-semibold">What validator misses</h3>
                            <ul className="space-y-2 text-sm text-foreground-muted">
                                <li>• Missing recommended properties that affect display</li>
                                <li>• Weak entity relationships</li>
                                <li>• Business type misalignment</li>
                                <li>• Framework rendering issues</li>
                            </ul>
                        </Card>
                        <Card padding="lg">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-green-glow text-accent-green">
                                ✓
                            </div>
                            <h3 className="mb-2 font-semibold">What SIP reveals</h3>
                            <ul className="space-y-2 text-sm text-foreground-muted">
                                <li>• Why your rich results aren&apos;t showing</li>
                                <li>• Which properties actually matter</li>
                                <li>• How to strengthen entity signals</li>
                                <li>• Exactly what to fix and how</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container-narrow text-center">
                    <h2 className="mb-4 text-2xl font-bold">Ready to see your schema?</h2>
                    <p className="mb-8 text-foreground-muted">
                        Free analysis includes entity detection and rich result eligibility.
                    </p>
                    <Link href="/analyze" className="btn btn-primary btn-lg">
                        Analyze Your URL
                    </Link>
                </div>
            </section>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "How to Analyze Schema Markup with SIP",
                        description:
                            "A three-step guide to understanding and optimizing your structured data.",
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Enter your URL",
                                text: "Paste any URL into the analyzer. We fetch and parse all JSON-LD, microdata, and RDFa.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Review interpretation",
                                text: "See entity detection, rich result eligibility, and confidence scores.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Implement fixes",
                                text: "Follow prioritized recommendations with copy-paste JSON-LD fixes.",
                            },
                        ],
                    }),
                }}
            />
        </>
    );
}
