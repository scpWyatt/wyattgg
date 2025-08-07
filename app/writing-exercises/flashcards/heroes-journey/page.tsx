"use client";

import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import heroesJourneyData from "@/data/writing-exercises/flashcards/heroes-journey.json";
import { FlashcardPageShell } from "../FlashcardPageShell";

type HeroJourneyStage = {
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

export default function HeroesJourneyFlashcards() {
    const cards = Object.entries(heroesJourneyData as Record<string, HeroJourneyStage>).map(([id, stage]) => ({
        id,
        term: stage.term,
        definition: stage.definition,
        example: stage.example,
        additionalInfo: {
            purpose: stage.additionalInfo.purpose,
            pacing: stage.additionalInfo.pacing,
            whenToUseIt: stage.additionalInfo.whenToUseIt,
            pitfalls: stage.additionalInfo.pitfalls,
            commonVariations: stage.additionalInfo.commonVariations,
            example: stage.example,
        },
    }));

    return (
        <FlashcardPageShell title="The Hero's Journey Flashcards" subtitle="Master Joseph Campbell's stages of the monomyth">
            <FlashcardGame
                cards={cards}
                title="The Hero's Journey"
                subtitle="Master the stages of the monomyth"
                config={{
                    allowPracticeMode: true,
                    showExamples: true,
                    additionalFields: ["purpose", "pacing", "whenToUseIt", "commonVariations", "pitfalls"],
                    reverseMode: true,
                    showProgress: true,
                    allowShuffle: true,
                    subheaderField: "commonVariations",
                    layout: {
                        mainFields: ["purpose", "whenToUseIt"],
                        secondaryFields: ["example", "pitfalls"],
                        footerFields: ["pacing"],
                    },
                    hideHeader: true,
                }}
            />
        </FlashcardPageShell>
    );
}
