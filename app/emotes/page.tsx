import { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Wyatt.gg | Emotes",
  description:
    "Learn what chat emotes are, how to use them on Twitch and YouTube, and browse Wyatt's full emote list on okayeg.com.",
};

const EMOTES_LIST_URL = "https://okayeg.com/twitch/emotes/scpwyatt";

export default function EmotesPage() {
  return (
    <div className="page-wrap">
      <div className="panel">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        />

        {/* Hero + Browse first */}
        <section className="panel-pad reveal">
          <div className="eyebrow mb-5">
            <span className="pulse-dot" />
            Twitch &amp; YouTube Chat
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Channel Emotes
          </h1>
          <p className="mt-4 max-w-2xl body-muted">
            A quick intro to chat emotes — plus every emote you can use in my streams.
          </p>

          <div className="mt-8">
            <h2 className="section-title mb-1">Browse my emotes</h2>
            <p className="mb-4 max-w-2xl text-sm text-zinc-500">
              Full list across BetterTTV, 7TV, and FrankerFaceZ — everything you can type in chat.
            </p>
            <a
              href={EMOTES_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group link-tile max-w-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 font-display text-xs font-bold tracking-wide text-teal-300 transition duration-200 group-hover:border-teal-400/40 group-hover:bg-teal-400/15">
                  ok
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-semibold text-white">scpWyatt Emotes</h3>
                  <p className="mt-0.5 text-sm text-zinc-500">All channel emotes on okayeg.com</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-teal-400/25 bg-teal-400/10 px-3 py-1.5 text-xs font-semibold text-teal-200 transition group-hover:border-teal-400/40 group-hover:bg-teal-400/15 group-hover:text-teal-100">
                  View list
                  <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* What are emotes */}
        <section className="border-t border-white/[0.06] px-5 py-8 sm:px-8 sm:py-9 lg:px-10 reveal reveal-delay-1">
          <h2 className="section-title mb-3">What are emotes?</h2>
          <p className="max-w-2xl body-muted">
            Emotes are short codes you type in chat that turn into custom images or animations —
            reactions, inside jokes, and channel expressions. Beyond the default Twitch and YouTube
            emotes, I also use third-party ones from BetterTTV, 7TV, and FrankerFaceZ.
          </p>
        </section>

        {/* How to use */}
        <section className="border-t border-white/[0.06] px-5 py-8 sm:px-8 sm:py-9 lg:px-10 reveal reveal-delay-2">
          <h2 className="section-title mb-4">How to use them</h2>
          <ol className="max-w-2xl space-y-4">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] font-display text-xs font-semibold text-teal-300">
                1
              </span>
              <span className="body-muted pt-0.5">
                Open my Twitch or YouTube chat while watching a stream.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] font-display text-xs font-semibold text-teal-300">
                2
              </span>
              <span className="body-muted pt-0.5">
                Type an emote&apos;s code exactly as it appears on the emote list, then send the
                message. It will show up as an emote on stream.
              </span>
            </li>
          </ol>
          <p className="mt-5 max-w-2xl rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-zinc-500">
            Optional: if you want to see third-party emotes in chat yourself (not just the text
            codes), install the BetterTTV, 7TV, and/or FrankerFaceZ browser extension.
          </p>
        </section>

        <div className="border-t border-white/[0.06] px-5 py-6 sm:px-8 lg:px-10 reveal reveal-delay-3">
          <Link href="/" className="btn-ghost">
            Back to Home
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
