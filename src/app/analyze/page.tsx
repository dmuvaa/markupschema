"use client";

import { useActionState, useRef } from "react";
import { analyzeUrl, AnalyzeFormState } from "./actions";
import Card from "@/components/ui/Card";
import ScoreRing from "@/components/ui/ScoreRing";
import CodeBlock from "@/components/ui/CodeBlock";
import HtmlViewer from "@/components/schema/HtmlViewer";

export default function AnalyzePage() {
    const [state, formAction, isPending] = useActionState<AnalyzeFormState, FormData>(
        analyzeUrl,
        {}
    );

    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleNavigate = (url: string) => {
        if (inputRef.current && formRef.current) {
            inputRef.current.value = url;
            formRef.current.requestSubmit();
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="section-sm">
                <div className="container-narrow text-center">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                        Analyze Your Schema
                    </h1>
                    <p className="mb-8 text-foreground-muted">
                        Enter any URL to see what schema markup exists and how effective it
                        is.
                    </p>
                </div>
            </section>

            {/* URL Input Form */}
            <section className="pb-8">
                <div className="container-narrow">
                    <form action={formAction} ref={formRef}>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <input
                                type="text"
                                name="url"
                                placeholder="example.com"
                                className="input flex-1"
                                required
                                disabled={isPending}
                                ref={inputRef}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary whitespace-nowrap"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <>
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                        Analyze
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Error Display */}
                    {state.error && (
                        <div className="mt-4 rounded-lg border border-accent-red bg-accent-red-glow p-4">
                            <p className="text-accent-red">{state.error}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Results Section */}
            {state.result && (
                <section className="section-sm border-t border-border">
                    <div className="container-wide">
                        {/* Summary Header */}
                        <div className="mb-8 grid gap-6 lg:grid-cols-3">
                            {/* Opportunity Score */}
                            <Card padding="lg" className="flex items-center gap-6">
                                <ScoreRing
                                    score={state.result.opportunityScore}
                                    size="md"
                                    label="Opportunity"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">Opportunity Score</h3>
                                    <p className="text-sm text-foreground-muted">
                                        {state.result.opportunityScore >= 80
                                            ? "Your schema is well-optimized"
                                            : state.result.opportunityScore >= 50
                                                ? "Good foundation, room for improvement"
                                                : "Significant optimization needed"}
                                    </p>
                                </div>
                            </Card>

                            {/* Entities Detected */}
                            <Card padding="lg">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Entities Detected
                                </h3>
                                <div className="space-y-2">
                                    {state.result.entities.slice(0, 4).map((entity) => (
                                        <div
                                            key={entity.id}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className={`h-2 w-2 rounded-full ${entity.confidence === "high"
                                                        ? "bg-accent-green"
                                                        : entity.confidence === "medium"
                                                            ? "bg-accent-amber"
                                                            : "bg-accent-red"
                                                        }`}
                                                />
                                                <span className="font-medium">{entity.type}</span>
                                            </div>
                                            <span className="text-xs text-foreground-subtle capitalize">
                                                {entity.confidence}
                                            </span>
                                        </div>
                                    ))}
                                    {state.result.entities.length > 4 && (
                                        <p className="text-sm text-foreground-subtle">
                                            +{state.result.entities.length - 4} more entities
                                        </p>
                                    )}
                                </div>
                            </Card>

                            {/* Rich Result Eligibility */}
                            <Card padding="lg">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Rich Result Eligibility
                                </h3>
                                <div className="space-y-2">
                                    {state.result.eligibleRichResults.length > 0 ? (
                                        state.result.eligibleRichResults.slice(0, 4).map((result) => (
                                            <div
                                                key={result.type}
                                                className="flex items-center justify-between"
                                            >
                                                <span className="font-medium">{result.name}</span>
                                                <span
                                                    className={`badge ${result.eligible
                                                        ? result.confidence === "high"
                                                            ? "badge-strong"
                                                            : "badge-weak"
                                                        : "badge-conflict"
                                                        }`}
                                                >
                                                    {result.eligible
                                                        ? result.confidence === "high"
                                                            ? "Eligible"
                                                            : "Likely"
                                                        : "Not Eligible"}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-foreground-muted">
                                            No recognized rich result types found
                                        </p>
                                    )}
                                </div>
                            </Card>
                        </div>

                        {/* Score Breakdown */}
                        <Card padding="lg" className="mb-8">
                            <h3 className="mb-6 text-lg font-semibold">Score Breakdown</h3>
                            <div className="grid gap-4 sm:grid-cols-5">
                                {Object.entries(state.result.scoreBreakdown).map(
                                    ([key, value]) => (
                                        <div key={key} className="text-center">
                                            <div className="mb-2 text-2xl font-bold">{value}</div>
                                            <div className="text-xs text-foreground-subtle capitalize">
                                                {key.replace(/([A-Z])/g, " $1").trim()}
                                            </div>
                                            <div className="mt-2 h-1.5 rounded-full bg-surface-2">
                                                <div
                                                    className={`h-full rounded-full transition-all ${value >= 80
                                                        ? "bg-accent-green"
                                                        : value >= 50
                                                            ? "bg-accent-amber"
                                                            : "bg-accent-red"
                                                        }`}
                                                    style={{ width: `${value}%` }}
                                                />
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </Card>

                        {/* Issues & Recommendations */}
                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Issues */}
                            <Card padding="lg">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Issues Found ({state.result.issues.length})
                                </h3>
                                <div className="space-y-3">
                                    {state.result.issues.slice(0, 6).map((issue, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 rounded-lg bg-surface-2 p-3"
                                        >
                                            <div
                                                className={`mt-0.5 h-2 w-2 rounded-full flex-shrink-0 ${issue.severity === "error"
                                                    ? "bg-accent-red"
                                                    : issue.severity === "warning"
                                                        ? "bg-accent-amber"
                                                        : "bg-accent-blue"
                                                    }`}
                                            />
                                            <div>
                                                <p className="text-sm font-medium">{issue.message}</p>
                                                {issue.recommendation && (
                                                    <p className="mt-1 text-xs text-foreground-subtle">
                                                        {issue.recommendation}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {state.result.issues.length === 0 && (
                                        <p className="text-sm text-foreground-muted">
                                            No issues detected
                                        </p>
                                    )}
                                </div>
                            </Card>

                            {/* Recommendations */}
                            <Card padding="lg">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">Top Recommendations</h3>
                                    <span className="badge badge-info">Free Preview</span>
                                </div>
                                <div className="space-y-3">
                                    {state.result.recommendations.slice(0, 3).map((rec, index) => (
                                        <div
                                            key={index}
                                            className="rounded-lg bg-surface-2 p-3"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <span
                                                    className={`badge ${rec.priority === "high"
                                                        ? "badge-conflict"
                                                        : rec.priority === "medium"
                                                            ? "badge-weak"
                                                            : "badge-info"
                                                        }`}
                                                >
                                                    {rec.priority}
                                                </span>
                                                <span className="font-medium text-sm">{rec.title}</span>
                                            </div>
                                            <p className="text-xs text-foreground-muted">
                                                {rec.description}
                                            </p>
                                        </div>
                                    ))}
                                    {state.result.recommendations.length > 3 && (
                                        <div className="rounded-lg border border-dashed border-border p-4 text-center">
                                            <p className="text-sm text-foreground-muted mb-2">
                                                +{state.result.recommendations.length - 3} more
                                                recommendations
                                            </p>
                                            <button className="btn btn-secondary btn-sm">
                                                Unlock Full Report
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>

                        {/* Raw Schema Preview */}
                        {state.rawSchemas && state.rawSchemas.length > 0 && (
                            <div className="mt-8">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Detected JSON-LD ({state.rawSchemas.length} blocks)
                                </h3>
                                <div className="space-y-4">
                                    {state.rawSchemas.slice(0, 2).map((schema, index) => (
                                        <CodeBlock
                                            key={index}
                                            code={schema}
                                            language="json"
                                            title={`Schema Block ${index + 1}`}
                                            showLineNumbers
                                        />
                                    ))}
                                    {state.rawSchemas.length > 2 && (
                                        <div className="rounded-lg border border-dashed border-border p-4 text-center">
                                            <p className="text-sm text-foreground-muted">
                                                +{state.rawSchemas.length - 2} more schema blocks
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* html viewer */}
            {state.htmlContent && (
                <section className="section-sm border-t border-border">
                    <div className="container-wide">
                        <HtmlViewer
                            htmlContent={state.htmlContent}
                            url={state.url || state.result?.url || "Page"}
                            onNavigate={handleNavigate}
                        />
                    </div>
                </section>
            )}

            {/* Empty State */}
            {!state.result && !state.error && !isPending && (
                <section className="section-sm">
                    <div className="container-narrow text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-1">
                            <svg
                                className="h-10 w-10 text-foreground-subtle"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </div>
                        <h2 className="mb-2 text-xl font-semibold">
                            Enter a URL to get started
                        </h2>
                        <p className="text-foreground-muted">
                            We&apos;ll extract and analyze all JSON-LD, microdata, and RDFa on
                            the page.
                        </p>
                    </div>
                </section>
            )}

            {/* JSON-LD for this page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "Schema Analyzer",
                        applicationCategory: "DeveloperApplication",
                        operatingSystem: "Web",
                        description:
                            "Free schema markup analyzer that detects JSON-LD, microdata, and RDFa and evaluates rich result eligibility.",
                        isPartOf: {
                            "@type": "SoftwareApplication",
                            name: "SIP - Schema Intelligence Platform",
                        },
                    }),
                }}
            />
        </>
    );
}
