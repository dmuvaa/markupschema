import Card from "@/components/ui/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Simple, confident pricing for schema intelligence. Solo, Pro, and Audit plans available.",
};

const plans = [
    {
        name: "Solo",
        price: "$29",
        period: "/month",
        description: "For individual developers and small projects",
        features: [
            "Unlimited URL analyses",
            "Full analysis reports",
            "Generated JSON-LD fixes",
            "Rich result eligibility",
            "Email support",
        ],
        cta: "Start Solo",
        popular: false,
    },
    {
        name: "Pro",
        price: "$79",
        period: "/month",
        description: "For agencies and growing teams",
        features: [
            "Everything in Solo",
            "Competitor comparison",
            "Saved reports & history",
            "Team sharing",
            "Priority support",
            "API access",
        ],
        cta: "Start Pro",
        popular: true,
    },
    {
        name: "Audit",
        price: "$199",
        period: "one-time",
        description: "Deep-dive expert analysis",
        features: [
            "Full site schema audit",
            "Competitor analysis (3 sites)",
            "Custom recommendations",
            "Implementation guide",
            "30-min consultation call",
        ],
        cta: "Book Audit",
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-sm">
                <div className="container-narrow text-center">
                    <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                        Simple, Confident Pricing
                    </h1>
                    <p className="text-lg text-foreground-muted">
                        Start with a free analysis. Upgrade when you need full
                        recommendations.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section-sm">
                <div className="container-wide">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {plans.map((plan) => (
                            <Card
                                key={plan.name}
                                padding="lg"
                                className={`relative ${plan.popular ? "border-accent-blue ring-1 ring-accent-blue" : ""
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="rounded-full bg-accent-blue px-4 py-1 text-xs font-medium text-white">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                                    <div className="mb-2 flex items-baseline gap-1">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="text-foreground-muted">{plan.period}</span>
                                    </div>
                                    <p className="text-sm text-foreground-muted">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="mb-8 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <svg
                                                className="h-5 w-5 flex-shrink-0 text-accent-green"
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
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full ${plan.popular
                                            ? "btn btn-primary"
                                            : "btn btn-secondary"
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section border-t border-border">
                <div className="container-narrow">
                    <h2 className="mb-8 text-center text-2xl font-bold">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        <Card padding="lg">
                            <h3 className="mb-2 font-semibold">
                                What&apos;s included in the free analysis?
                            </h3>
                            <p className="text-sm text-foreground-muted">
                                Free analyses show entity detection, rich result eligibility,
                                and your opportunity score. Detailed recommendations and
                                generated fixes require a paid plan.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h3 className="mb-2 font-semibold">
                                Can I cancel anytime?
                            </h3>
                            <p className="text-sm text-foreground-muted">
                                Yes. Both Solo and Pro are month-to-month with no long-term
                                commitment. Cancel anytime from your dashboard.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h3 className="mb-2 font-semibold">
                                What&apos;s the difference between Pro and Audit?
                            </h3>
                            <p className="text-sm text-foreground-muted">
                                Pro is a self-service subscription with ongoing access. Audit is
                                a one-time expert analysis with a consultation call — ideal for
                                complex sites or when you need implementation guidance.
                            </p>
                        </Card>

                        <Card padding="lg">
                            <h3 className="mb-2 font-semibold">
                                Do you offer team or enterprise pricing?
                            </h3>
                            <p className="text-sm text-foreground-muted">
                                Yes. Contact us for custom pricing on teams larger than 5 or
                                enterprise requirements like SSO, dedicated support, or custom
                                integrations.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-surface-1 border-t border-border">
                <div className="container-narrow text-center">
                    <h2 className="mb-4 text-2xl font-bold">
                        Start with a free analysis
                    </h2>
                    <p className="mb-8 text-foreground-muted">
                        No credit card required. See your schema intelligence in seconds.
                    </p>
                    <Link href="/analyze" className="btn btn-primary btn-lg">
                        Analyze Free
                    </Link>
                </div>
            </section>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "SIP Pricing",
                        description:
                            "Simple, confident pricing for schema intelligence platform.",
                        mainEntity: {
                            "@type": "SoftwareApplication",
                            name: "SIP - Schema Intelligence Platform",
                            offers: [
                                {
                                    "@type": "Offer",
                                    name: "Solo",
                                    price: "29",
                                    priceCurrency: "USD",
                                    priceValidUntil: "2027-12-31",
                                },
                                {
                                    "@type": "Offer",
                                    name: "Pro",
                                    price: "79",
                                    priceCurrency: "USD",
                                    priceValidUntil: "2027-12-31",
                                },
                                {
                                    "@type": "Offer",
                                    name: "Audit",
                                    price: "199",
                                    priceCurrency: "USD",
                                    priceValidUntil: "2027-12-31",
                                },
                            ],
                        },
                    }),
                }}
            />
        </>
    );
}
