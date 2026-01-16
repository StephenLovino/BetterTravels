"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { navLink } from "@/lib/animations";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Tours", href: "#tours" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-3xl font-bold font-[family-name:var(--font-playfair)] italic text-primary tracking-tight">
                    BetterTravel
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link, i) => (
                        <motion.div
                            key={link.name}
                            custom={i}
                            variants={navLink}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link
                                href={link.href}
                                className="text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button variant="primary" className="text-sm px-5 py-2.5">
                        Plan Your Trip
                    </Button>
                </div>

                {/* Mobile Menu Toggle would go here */}
                <div className="md:hidden">
                    <button className="text-secondary p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
