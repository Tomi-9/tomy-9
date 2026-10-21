"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
];

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <>
            <nav className="fixed top-0 left-0 w-full h-17 z-[100] flex pt-1border-b border-white/[.12]">
                <div className="flex w-full items-center justify-between px-4">
                    {/* Desktop: show all nav links */}
                    <div className="flex gap-3 w-full items-center justify-around">
                        <div className="flex gap-2">
                            {navLinks.map((navlink, i) => {
                                const isActive = pathname === navlink.href;
                                return (
                                    <Link
                                        key={navlink.name}
                                        href={navlink.href}
                                    >
                                        <motion.div
                                            className={cn(
                                                "relative px-4 md:px-4 py-3 font-display text-xs md:text-sm tracking-widest transition-all duration-300",
                                                "rounded-t-md group cursor-pointer",
                                                isActive
                                                    ? "text-white"
                                                    : "text-gray-500 hover:text-gray-50 z-0"
                                            )}
                                        >
                                            <span className="relative">
                                                {navlink.name}
                                                <div className={cn(
                                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-300 transition-all duration-300 group-hover:w-full",
                                                    isActive && "w-full opacity-80"
                                                )} />
                                            </span>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                        {/* social icons here */}
                        <div className="flex gap-5 items-center justify-center">
                            <Icon href="https://github.com/Tomi-9">
                                <svg role="img" viewBox="0 0 24 24" className="size-5">
                                    <title>GitHub</title>
                                    <path
                                        fill="currentColor"
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    />
                                </svg>
                            </Icon>
                            <Icon href="https://x.com/Tomy_t9">
                                <svg role="img" viewBox="0 0 24 24" className="size-5">
                                    <title>X</title>
                                    <path
                                        fill="currentColor"
                                        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                                    />
                                </svg>
                            </Icon>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

function Icon({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center gap-1 font-medium text-xs transition-colors hover:text-neutral-200"
        >
            {children}
        </Link>
    );
}