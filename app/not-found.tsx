import Image from "next/image";
import Link from "next/link";
import { ShowTriedPath } from "./components/ShowTriedPath";

export default function NotFound() {
    return (
        <div className="relative text-white">
            <main className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl p-px bg-linear-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/40">
                    <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden">
                        <div aria-hidden className="pointer-events-none absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-[1.25rem] bg-linear-to-b from-white/10 to-transparent blur-xl opacity-30" />
                        <div className="px-6 sm:px-10 py-12 sm:py-16 text-center">
                            <Image
                                className="mx-auto opacity-95"
                                src="/static/pepe-hands.png"
                                alt="404 image"
                                width={200}
                                height={200}
                                preload
                            />
                            <h1 className="mt-6 text-6xl sm:text-7xl font-extrabold tracking-tight text-white">404</h1>
                            <h2 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-white/90">Page not found</h2>
                            <ShowTriedPath />
                            <div className="mt-8 flex items-center justify-center">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 via-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold shadow-lg shadow-blue-900/40 transition-colors hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-500 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400/50"
                                >
                                    Go home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
