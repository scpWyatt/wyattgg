import { FlashcardGameConfig } from "@/app/components/flashcards/types";

type SetKey = "literaryDevices" | "heroesJourney" | "saveTheCat" | "storytelling";

export const FLASHCARD_CONFIGS: Record<SetKey, FlashcardGameConfig> = {
  literaryDevices: {
    allowPracticeMode: true,
    showExamples: true,
    additionalFields: [
      "whyUseIt",
      "howToUseIt",
      "example",
      "derivation",
      "pronunciation",
      "school",
    ],
    reverseMode: true,
    showProgress: true,
    allowShuffle: true,
    subheaderField: "pronunciation",
    layout: {
      mainFields: ["whyUseIt", "howToUseIt"],
      secondaryFields: ["example", "derivation"],
      footerFields: ["school"],
    },
    hideHeader: true,
  },
  heroesJourney: {
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
  },
  saveTheCat: {
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
  },
  storytelling: {
    allowPracticeMode: true,
    showExamples: true,
    additionalFields: ["purpose", "howToUseIt", "pitfalls", "origin", "example", "commonVariations"],
    reverseMode: true,
    showProgress: true,
    allowShuffle: true,
    subheaderField: "commonVariations",
    layout: {
      mainFields: ["purpose", "howToUseIt"],
      secondaryFields: ["example", "pitfalls"],
      footerFields: ["origin"],
    },
    hideHeader: true,
  },
};


