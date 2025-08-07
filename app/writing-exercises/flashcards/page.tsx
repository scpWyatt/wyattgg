import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
import { FlashcardPageShell } from "./FlashcardPageShell";
import { FLASHCARD_CONFIGS } from "./config";
import literaryDevicesData from "@/data/writing-exercises/flashcards/literary-devices.json";

export default function WritingExercisesFlashcards() {
  const cards = Object.entries(literaryDevicesData as unknown as Record<string, any>).map(([key, item]) => ({
    id: item.id ?? key,
    term: item.term ?? item.name,
    definition: item.definition,
    example: item.example,
    additionalInfo: {
      pronunciation: item.additionalInfo?.pronunciation ?? item.pronunciation,
      whyUseIt: item.additionalInfo?.whyUseIt ?? item.whyUseIt,
      howToUseIt: item.additionalInfo?.howToUseIt ?? item.howToUseIt,
      school: item.additionalInfo?.school ?? item.school,
      derivation: item.additionalInfo?.derivation ?? item.derivation,
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
