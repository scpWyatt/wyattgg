"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  url: string;
  text: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const ClientSideNav = ({
  navLinks,
  externalLinks,
  mobile = false,
}: {
  navLinks: NavLink[];
  externalLinks: NavLink[];
  mobile?: boolean;
}) => {
  const pathname = usePathname();

  if (mobile) {
    return (
      <nav className="space-y-1 px-3 py-3">
        {navLinks.map((link) => {
          const active = pathname === link.url;
          return (
            <Link
              key={link.url}
              href={link.url}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-teal-400/10 text-teal-300"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.text}
            </Link>
          );
        })}
        <div className="mt-3 flex gap-2 border-t border-white/6 pt-3">
          {externalLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon ? <link.icon className="h-5 w-5" /> : link.text}
              <span className="sr-only">{link.text}</span>
            </a>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-1">
      {navLinks.map((link) => {
        const active = pathname === link.url;
        return (
          <Link
            key={link.url}
            href={link.url}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              active
                ? "bg-teal-400/10 text-teal-300"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {link.text}
          </Link>
        );
      })}
      <span className="mx-2 h-4 w-px bg-white/10" aria-hidden />
      <div className="flex items-center gap-0.5">
        {externalLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon ? <link.icon className="h-4 w-4" /> : link.text}
            <span className="sr-only">{link.text}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
