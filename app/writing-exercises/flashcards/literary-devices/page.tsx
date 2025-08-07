"use client";

import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import literaryDevicesData from "@/data/writing-exercises/flashcards/literary-devices.json";
import { FlashcardPageShell } from "../FlashcardPageShell";
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
        <FlashcardPageShell title="Literary Devices Flashcards" subtitle="Master the tools and techniques of effective writing">
            <FlashcardGame
                cards={cards}
                title="Literary Devices"
                subtitle="Master the tools of effective writing"
                config={FLASHCARD_CONFIGS.literaryDevices}
            />
        </FlashcardPageShell>
    );
}
