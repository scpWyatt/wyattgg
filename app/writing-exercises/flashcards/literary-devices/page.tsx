"use client";

import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import literaryDevicesData from "@/data/writing-exercises/flashcards/literary-devices.json";
import Header from "@/app/writing-exercises/components/Header";
import { FLASHCARD_CONFIGS } from "../config";

export default function LiteraryDevicesFlashcards() {
    // Create a type for the device data structure
    type LiteraryDevice = {
        id: string;
        term: string;
        definition: string;
        example: string;
        additionalInfo: {
            pronunciation: string;
            whyUseIt: string;
            howToUseIt: string;
            school: string;
            derivation: string;
        };
    };

    const cards = Object.entries(literaryDevicesData as Record<string, LiteraryDevice>).map(([id, device]) => ({
        id,
        term: device.term,
        definition: device.definition,
        example: device.example,
        additionalInfo: {
            pronunciation: device.additionalInfo.pronunciation,
            whyUseIt: device.additionalInfo.whyUseIt,
            howToUseIt: device.additionalInfo.howToUseIt,
            example: device.example,
            derivation: device.additionalInfo.derivation,
            school: device.additionalInfo.school,
        },
    }));

    return (
        <div className="relative text-white">
            <main className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-16 lg:pb-10 xl:pt-14 xl:pb-12">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/40">
                    <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl overflow-visible">
                        <div aria-hidden className="pointer-events-none absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-[1.25rem] bg-gradient-to-b from-white/10 to-transparent blur-xl opacity-30" />

                        <div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8 lg:pb-6">
                            <Header
                                title="Literary Devices Flashcards"
                                subtitle="Master the tools and techniques of effective writing"
                            />
                        </div>

                        <div className="px-4 sm:px-8 pb-12 sm:pb-14 lg:pb-12 xl:pb-10">
                            <FlashcardGame
                                cards={cards}
                                title="Literary Devices"
                                subtitle="Master the tools of effective writing"
                                config={FLASHCARD_CONFIGS.literaryDevices}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
