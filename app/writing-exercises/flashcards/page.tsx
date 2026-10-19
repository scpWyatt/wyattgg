import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import { FlashcardPageShell } from "./FlashcardPageShell";
import { FLASHCARD_CONFIGS } from "./config";
import literaryDevicesData from "@/data/writing-exercises/flashcards/literary-devices.json";

export default function WritingExercisesFlashcards() {
  const cards = Object.entries(literaryDevicesData).map(([key, item]) => ({
    id: item.id ?? key,
    term: item.term,
    definition: item.definition,
    example: item.example,
    additionalInfo: {
      ...item.additionalInfo,
      example: item.example,
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
