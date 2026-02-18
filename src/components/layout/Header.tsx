"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
            <div className="container-wide">
                <nav className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue">
                            <svg
                                className="h-5 w-5 text-white"
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
                        <span className="text-lg font-semibold tracking-tight">SIP</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden items-center gap-4 md:flex">
                        <Link
                            href="/app/dashboard"
                            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                        >
                            Sign In
                        </Link>
                        <Link href="/analyze" className="btn btn-primary text-sm">
                            Analyze URL
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="btn-ghost p-2 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="border-t border-border py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground-muted transition-colors hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-border" />
                            <Link
                                href="/app/dashboard"
                                className="text-foreground-muted transition-colors hover:text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/analyze"
                                className="btn btn-primary text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Analyze URL
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
