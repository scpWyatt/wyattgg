import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import { FlashcardPageShell } from "@/app/writing-exercises/flashcards/FlashcardPageShell";
import { FLASHCARD_CONFIGS } from "@/app/writing-exercises/flashcards/config";
import poetsData from "@/data/poetry/poets.json";
import { Poet } from "@/app/poetry/types";

export default function PoetsFlashcards() {
  const cards = Object.entries(poetsData as Record<string, Poet>).map(([id, p]) => ({
    id,
    term: p.name,
    definition: p.briefBio || "",
    example: p.notableWorks?.map((w) => `${w.title} (${w.publicationYear})`).join("; ") || "",
    additionalInfo: {
      bio: p.briefBio || "",
      notableWorks: p.notableWorks?.map((w) => `${w.title} (${w.publicationYear})`).join("; ") || "",
      lifeEvents: p.keyLifeEvents?.map((e) => `${e.year}: ${e.event}${e.significance ? ` — ${e.significance}` : ""}`).join(" | ") || "",
      nationality: p.nationality,
      literaryMovement: p.literaryMovement,
      dates: `${p.dateOfBirth} – ${p.dateOfDeath}`,
    },
  }));

  return (
    <FlashcardPageShell title="Poets Flashcards" subtitle="Study the lives and works of great poets">
      <FlashcardGame
        cards={cards}
        title="Poets"
        subtitle="Study the lives and works of great poets"
        config={FLASHCARD_CONFIGS.poets}
      />
    </FlashcardPageShell>
  );
}