import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import { FlashcardPageShell } from "./FlashcardPageShell";
import { FLASHCARD_CONFIGS } from "./config";
import literaryDevicesData from "@/data/writing-exercises/flashcards/literary-devices.json";

type LegacyLiteraryDevice = {
  id: string;
  name: string;
  pronunciation: string;
  definition: string;
  whyUseIt: string;
  howToUseIt: string;
  school: string;
  example: string;
  derivation: string;
};

export default function WritingExercisesFlashcards() {
  const cards = Object.entries(literaryDevicesData as Record<string, LegacyLiteraryDevice>).map(([id, d]) => ({
    id,
    term: d.name,
    definition: d.definition,
    example: d.example,
    additionalInfo: {
      pronunciation: d.pronunciation,
      whyUseIt: d.whyUseIt,
      howToUseIt: d.howToUseIt,
      school: d.school,
      derivation: d.derivation,
      example: d.example,
    },
  }));

  return (
    <FlashcardPageShell title="Literary Devices Flashcards" subtitle="Study literary devices with interactive flashcards">
      <FlashcardGame
        cards={cards}
        title="Literary Devices"
        subtitle="Study literary devices with interactive flashcards"
        config={FLASHCARD_CONFIGS.literaryDevices}
      />
    </FlashcardPageShell>
  );
}
