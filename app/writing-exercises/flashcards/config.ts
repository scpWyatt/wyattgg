import { FlashcardGameConfig } from "@/app/components/flashcards/types";

type SetKey =
  | "literaryDevices"
  | "heroesJourney"
  | "saveTheCat"
  | "storytelling"
  | "poets"
  | "poems"
  | "poeticTerms";

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
  poets: {
    allowPracticeMode: true,
    showExamples: false,
    additionalFields: [
      "bio",
      "notableWorks",
      "lifeEvents",
      "nationality",
      "literaryMovement",
      "dates",
    ],
    reverseMode: true,
    showProgress: true,
    allowShuffle: true,
    subheaderField: "dates",
    layout: {
      mainFields: ["bio", "notableWorks"],
      secondaryFields: ["lifeEvents"],
      footerFields: ["nationality", "literaryMovement", "dates"],
    },
    hideHeader: true,
  },
  poems: {
    allowPracticeMode: true,
    showExamples: true,
    additionalFields: [
      "author",
      "excerpt",
      "poemType",
      "meter",
      "rhymeScheme",
      "subjects",
      "themes",
      "lineCount",
      "dateOfPublication",
    ],
    reverseMode: true,
    showProgress: true,
    allowShuffle: true,
    subheaderField: "author",
    layout: {
      mainFields: ["author", "poemType"],
      secondaryFields: ["excerpt", "meter"],
      footerFields: ["dateOfPublication", "lineCount"],
    },
    hideHeader: true,
  },
  poeticTerms: {
    allowPracticeMode: true,
    showExamples: true,
    additionalFields: [
      "pronunciation",
      "example",
      "whyUseIt",
      "howToUseIt",
      "etymology",
      "category",
    ],
    reverseMode: true,
    showProgress: true,
    allowShuffle: true,
    subheaderField: "pronunciation",
    layout: {
      mainFields: ["whyUseIt", "howToUseIt"],
      secondaryFields: ["example", "etymology"],
      footerFields: ["category"],
    },
    hideHeader: true,
  },
};


