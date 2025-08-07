import { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
);

export const metadata: Metadata = {
    title: "Wyatt.gg | Voice Over Artist & Content Creator",
    description: "Wyatt's personal website showcasing voice over work and content creation",
};

type PageInfo = {
    title: string;
    description: string;
    url: string;
    icon: React.ElementType;
};

const getBrandStyles = (title: string) => {
    switch (title) {
        case "YouTube":
            return {
                overlay: "from-[#ff0033]/20 via-[#ff6b6b]/10 to-transparent",
                icon: "text-[#ff4d5f] group-hover:text-[#ff7380]",
            } as const;
        case "Discord":
            return {
                overlay: "from-[#5865F2]/20 via-[#8ea2ff]/10 to-transparent",
                icon: "text-[#8ea2ff] group-hover:text-[#b2bfff]",
            } as const;
        case "Twitter":
            return {
                overlay: "from-[#e6e6e6]/20 via-[#9ca3af]/10 to-transparent",
                icon: "text-zinc-300 group-hover:text-white",
            } as const;
        default:
            return {
                overlay: "from-blue-500/15 via-purple-500/10 to-transparent",
                icon: "text-zinc-300 group-hover:text-white",
            } as const;
    }
};

// const internalLinks: PageInfo[] = [
//     {
//         title: "Writing Exercises",
//         description: "Interactive tools to improve your writing skills",
//         url: "/writing-exercises",
//         icon: BookOpenIcon,
//     },
// ];

const externalLinks: PageInfo[] = [
    {
        title: "YouTube",
        description: "Watch my latest content",
        url: "https://youtube.com/scpWyatt",
        icon: YouTubeIcon,
    },
    {
        title: "Discord",
        description: "Join the community",
        url: "https://discord.gg/scpWyatt",
        icon: DiscordIcon,
    },
    {
        title: "Twitter",
        description: "Follow me on Twitter",
        url: "https://x.com/scpwyatt",
        icon: XIcon,
    },
];

export default function Home() {
    return (
        <div className="relative text-white">

            <main className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-16 lg:pb-10 xl:pt-14 xl:pb-8 2xl:pt-12 2xl:pb-6">
                {/* Glass panel wrapper with gradient border */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/40">
                    <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl overflow-visible">
                        {/* Soft outer glow to prevent cut-off on large screens */}
                        <div aria-hidden className="pointer-events-none absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-[1.25rem] bg-gradient-to-b from-white/10 to-transparent blur-xl opacity-30" />
                        {/* Hero Section */}
                        <div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10 lg:pb-8 text-center">
                            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/90" />
                                Voice Over • Content Creator
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                                <span className="text-white/90">Welcome to </span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500">Wyatt.gg</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-300/90">
                                Voice Over Artist, Content Creator, and lifelong game enthusiast. Explore tools, projects, and ways to connect.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold shadow-lg shadow-blue-900/40 transition-all hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                                >
                                    <span className="absolute -inset-1 -z-10 rounded-full opacity-30 blur-xl transition-opacity group-hover:opacity-50 bg-[radial-gradient(circle_at_30%_30%,#60a5fa,transparent_45%),radial-gradient(circle_at_70%_70%,#a78bfa,transparent_45%)]" />
                                    Get in Touch
                                    <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="/writing-exercises"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 hover:from-white/10 hover:to-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                                >
                                    Explore Writing Tools
                                </Link>
                            </div>
                        </div>

                        {/* Featured Section */}
                        <div className="px-4 sm:px-8 pb-12 sm:pb-14 lg:pb-12 xl:pb-10">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white/95 mb-2">Featured</h2>
                            <div className="h-px w-24 bg-gradient-to-r from-white/40 via-white/10 to-transparent rounded-full mb-4" />
                            <Link
                                href="/writing-exercises"
                                className="group relative block rounded-xl p-[1px] bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-transparent transition-transform duration-150 ease-out transform-gpu will-change-transform hover:translate-y-[-2px]"
                            >
                                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl">
                                    <div className="pointer-events-none absolute -inset-24 opacity-20 blur-2xl bg-[conic-gradient(at_50%_50%,#22d3ee_0deg,#2dd4bf_90deg,#a78bfa_180deg,#f472b6_270deg,#22d3ee_360deg)]" />
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-emerald-400/15 p-3 ring-1 ring-inset ring-emerald-300/20">
                                            <BookOpenIcon className="h-8 w-8 text-emerald-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Writing Exercises</h3>
                                            <p className="text-sm text-zinc-300">Interactive tools to sharpen your storytelling and creativity.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Connect Section */}
                        <div className="px-4 sm:px-8 pb-14 sm:pb-16 lg:pb-14 xl:pb-12 2xl:pb-12">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white/95 mb-2">Connect With Me</h2>
                            <div className="h-px w-24 bg-gradient-to-r from-white/40 via-white/10 to-transparent rounded-full mb-4" />
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {externalLinks.map((link) => {
                                    const brand = getBrandStyles(link.title);
                                    return (
                                        <a
                                            key={link.title}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-1px]"
                                        >
                                            <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr ${brand.overlay}`} />
                                            <div className="relative flex flex-col items-center text-center">
                                                <link.icon className={`h-8 w-8 mb-2 transition-colors duration-150 ${brand.icon}`} />
                                                <h3 className="font-semibold text-white">{link.title}</h3>
                                                <p className="text-sm text-zinc-400">{link.description}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
