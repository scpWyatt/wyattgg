import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { CopyEmailButton } from './CopyEmailButton';

export const metadata: Metadata = {
  title: 'Wyatt.gg | Contact',
  description: 'Get in touch for sponsorships, voice acting opportunities, and business inquiries',
};

export default function Contact() {
  return (
    <div className="relative text-white">
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-16 lg:pb-10 xl:pt-14 xl:pb-8 2xl:pt-12 2xl:pb-6">
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/40">
          <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl overflow-visible">
            <div aria-hidden className="pointer-events-none absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-[1.25rem] bg-gradient-to-b from-white/10 to-transparent blur-xl opacity-30" />

            {/* Hero / Intro */}
            <div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10 lg:pb-8 text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/90" />
                Contact
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500">Get in Touch</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-300/90">
                Interested in working together? I’m open to sponsorships, voice acting opportunities, and other business inquiries.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:wyatt@wyatt.gg"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold shadow-lg shadow-blue-900/40 transition-all hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  <span className="absolute -inset-1 -z-10 rounded-full opacity-30 blur-xl transition-opacity group-hover:opacity-50 bg-[radial-gradient(circle_at_30%_30%,#60a5fa,transparent_45%),radial-gradient(circle_at_70%_70%,#a78bfa,transparent_45%)]" />
                  <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                  Email me
                  <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 hover:from-white/10 hover:to-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Email Card */}
            <div className="px-4 sm:px-8 pb-8 sm:pb-10 lg:pb-8 xl:pb-6">
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-xl transition-colors duration-150 ease-out">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                  <div className="rounded-lg bg-sky-400/15 p-3 ring-1 ring-inset ring-sky-300/20">
                    <EnvelopeIcon className="h-8 w-8 text-sky-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Business Inquiries</h2>
                    <p className="text-sm text-zinc-300">
                      The best way to reach me is by email. I’ll get back to you as soon as I can.
                    </p>
                  </div>
                  <CopyEmailButton />
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="mailto:wyatt@wyatt.gg"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-base font-semibold text-sky-200 hover:text-white hover:bg-sky-400/20 transition-colors"
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-300" />
                    wyatt@wyatt.gg
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}