"use client";

import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import saveTheCatData from "@/data/writing-exercises/flashcards/save-the-cat.json";
import { FlashcardPageShell } from "../FlashcardPageShell";

type SaveTheCatBeat = {
    id: string;
    term: string;
    definition: string;
    example: string;
    additionalInfo: {
        purpose: string;
        pacing: string;
        whenToUseIt: string;
        pitfalls: string;
        commonVariations: string;
    };
};

export default function SaveTheCatFlashcards() {
    const cards = Object.entries(saveTheCatData as Record<string, SaveTheCatBeat>).map(([id, beat]) => ({
        id,
        term: beat.term,
        definition: beat.definition,
        example: beat.example,
        additionalInfo: {
            purpose: beat.additionalInfo.purpose,
            timing: beat.additionalInfo.pacing,
            whenToUseIt: beat.additionalInfo.whenToUseIt,
            pitfalls: beat.additionalInfo.pitfalls,
            commonVariations: beat.additionalInfo.commonVariations,
            example: beat.example,
        },
    }));

    return (
        <FlashcardPageShell title="Save the Cat! Flashcards" subtitle="Master Blake Snyder's 15 story beats with interactive flashcards">
            <FlashcardGame
                cards={cards}
                title="Save the Cat!"
                subtitle="Master the 15 essential story beats"
                config={{
                    allowPracticeMode: true,
                    showExamples: true,
                    additionalFields: ["purpose", "timing", "whenToUseIt", "commonVariations", "pitfalls", "example"],
                    reverseMode: true,
                    showProgress: true,
                    allowShuffle: true,
                    subheaderField: "commonVariations",
                    layout: {
                        mainFields: ["purpose", "whenToUseIt"],
                        secondaryFields: ["example", "pitfalls"],
                        footerFields: ["timing"],
                    },
                    hideHeader: true,
                }}
            />
        </FlashcardPageShell>
    );
}
