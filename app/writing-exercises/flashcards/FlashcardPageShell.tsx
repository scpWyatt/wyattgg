import Header from "@/app/writing-exercises/components/Header";
import { ReactNode } from "react";

export function FlashcardPageShell({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle?: string;
    children: ReactNode;
}) {
    return (
        <div className="relative text-white">
            <main className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-16 lg:pb-12 xl:pt-14 xl:pb-12">
                <div className="relative rounded-2xl p-px bg-linear-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/40">
                    <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl overflow-visible">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-[1.25rem] bg-linear-to-b from-white/10 to-transparent blur-xl opacity-30"
                        />

                        <div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8 lg:pb-6">
                            <Header title={title} subtitle={subtitle} />
                        </div>

                        <div className="px-4 sm:px-8 pb-12 sm:pb-14 lg:pb-12 xl:pb-10">{children}</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
