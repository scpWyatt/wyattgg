import { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { CopyEmailButton } from "./CopyEmailButton";

export const metadata: Metadata = {
  title: "Wyatt.gg | Contact",
  description:
    "Get in touch for sponsorships, voice acting opportunities, and business inquiries",
};

export default function Contact() {
  return (
    <div className="page-wrap">
      <div className="panel">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal-400/50 to-transparent"
        />

        <section className="panel-pad text-center reveal">
          <div className="eyebrow mb-5 justify-center">
            <span className="pulse-dot" />
            Contact
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl body-muted">
            Interested in working together? I&apos;m open to sponsorships, voice acting
            opportunities, and other business inquiries.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:wyatt@wyatt.gg" className="btn-primary">
              <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
              Email me
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link href="/" className="btn-ghost">
              Back to Home
            </Link>
          </div>
        </section>

        <section className="border-t border-white/6 px-5 pb-8 pt-2 sm:px-8 sm:pb-10 lg:px-10 reveal reveal-delay-1">
          <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <h2 className="font-display text-lg font-semibold text-white">Business Inquiries</h2>
                <p className="mt-1 text-sm text-zinc-500">
                  The best way to reach me is by email. I&apos;ll get back to you as soon as I can.
                </p>
                <a
                  href="mailto:wyatt@wyatt.gg"
                  className="mt-3 inline-flex items-center gap-2 font-display text-base font-semibold text-teal-300 transition hover:text-teal-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  wyatt@wyatt.gg
                </a>
              </div>
              <CopyEmailButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
