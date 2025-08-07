import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import { FlashcardPageShell } from "@/app/writing-exercises/flashcards/FlashcardPageShell";
import { FLASHCARD_CONFIGS } from "@/app/writing-exercises/flashcards/config";
import poeticTermsData from "@/data/poetry/poetic-terms.json";
import { PoeticTerm } from "@/app/poetry/types";

export default function PoeticTermsFlashcards() {
  const cards = Object.entries(poeticTermsData as Record<string, PoeticTerm>).map(([id, t]) => ({
    id,
    term: t.term,
    definition: t.definition,
    example: t.example,
    additionalInfo: {
      pronunciation: t.pronunciation || "",
      whyUseIt: t.whyUseIt,
      howToUseIt: t.howToUseIt,
      etymology: t.etymology || "",
      category: t.category,
    },
  }));

  return (
    <FlashcardPageShell title="Poetic Terms Flashcards" subtitle="Master the language and techniques of poetry">
      <FlashcardGame
        cards={cards}
        title="Poetic Terms"
        subtitle="Master the language and techniques of poetry"
        config={FLASHCARD_CONFIGS.poeticTerms}
      />
    </FlashcardPageShell>
  );
}