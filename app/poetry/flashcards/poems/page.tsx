import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import { FlashcardPageShell } from "@/app/writing-exercises/flashcards/FlashcardPageShell";
import { FLASHCARD_CONFIGS } from "@/app/writing-exercises/flashcards/config";
import poemsData from "@/data/poetry/poems.json";
import { Poem } from "@/app/poetry/types";

export default function PoemsFlashcards() {
  const cards = Object.entries(poemsData as Record<string, Poem>).map(([id, p]) => ({
    id,
    term: p.title,
    definition: p.excerpt || "",
    example: p.firstLine || "",
    additionalInfo: {
      author: p.author,
      excerpt: p.excerpt || "",
      poemType: p.poemType,
      meter: p.meter || "",
      rhymeScheme: p.rhymeScheme || "",
      subjects: p.subject.join(", "),
      themes: p.themes.join(", "),
      lineCount: String(p.lineCount),
      dateOfPublication: p.dateOfPublication,
    },
  }));

  return (
    <FlashcardPageShell title="Poems Flashcards" subtitle="Analyze and understand classic poems">
      <FlashcardGame
        cards={cards}
        title="Poems"
        subtitle="Analyze and understand classic poems"
        config={FLASHCARD_CONFIGS.poems}
      />
    </FlashcardPageShell>
  );
}