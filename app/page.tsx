import { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

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
  accent: string;
};

const externalLinks: PageInfo[] = [
  {
    title: "YouTube",
    description: "Watch the latest videos",
    url: "https://youtube.com/scpWyatt",
    icon: YouTubeIcon,
    accent: "group-hover:text-[#ff4d5f] group-hover:border-[#ff4d5f]/30",
  },
  {
    title: "Discord",
    description: "Join the community",
    url: "https://discord.gg/scpWyatt",
    icon: DiscordIcon,
    accent: "group-hover:text-[#8ea2ff] group-hover:border-[#8ea2ff]/30",
  },
  {
    title: "X",
    description: "Follow along",
    url: "https://x.com/scpwyatt",
    icon: XIcon,
    accent: "group-hover:text-white group-hover:border-white/25",
  },
];

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="panel">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        />

        {/* Hero */}
        <section className="panel-pad text-center reveal">
          <div className="eyebrow mb-5 justify-center">
            <span className="pulse-dot" />
            Voice Over · Content Creator
          </div>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Wyatt.gg
          </h1>
          <p className="mx-auto mt-5 max-w-xl body-muted">
            Voice over artist, content creator, and lifelong game enthusiast. Find emotes, connect, or get in touch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/emotes" className="btn-ghost">
              Browse Emotes
            </Link>
          </div>
        </section>

        {/* Connect */}
        <section className="border-t border-white/[0.06] px-5 py-8 sm:px-8 sm:py-9 lg:px-10 reveal reveal-delay-1">
          <h2 className="section-title mb-1">Connect</h2>
          <p className="mb-5 text-sm text-zinc-500">Find me across the usual places.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {externalLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group link-tile text-center ${link.accent}`}
              >
                <link.icon className="mx-auto mb-3 h-7 w-7 text-zinc-400 transition duration-200 group-hover:scale-105" />
                <h3 className="font-display text-base font-semibold text-white">{link.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{link.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Emotes */}
        <section className="border-t border-white/[0.06] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-9 lg:px-10 reveal reveal-delay-2">
          <h2 className="section-title mb-1">Emotes</h2>
          <p className="mb-5 text-sm text-zinc-500">Channel emotes for Twitch &amp; YouTube chat.</p>
          <Link href="/emotes" className="group link-tile">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300 transition duration-200 group-hover:border-teal-400/40 group-hover:bg-teal-400/15">
                <FaceSmileIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h3 className="font-display text-base font-semibold text-white">Channel Emotes</h3>
                <p className="mt-0.5 text-sm text-zinc-500">
                  Learn how they work and browse the full list.
                </p>
              </div>
              <ArrowRightIcon
                className="h-4 w-4 shrink-0 text-zinc-600 transition duration-200 group-hover:translate-x-0.5 group-hover:text-teal-300"
                aria-hidden="true"
              />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
