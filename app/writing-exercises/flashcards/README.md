Flashcards: How to add a new deck

Overview
- All flashcard sets share the same UI/logic using `app/components/flashcards/FlashcardGame.tsx` and `FlashcardCard.tsx`.
- Page wrapper styling and header are unified by `FlashcardPageShell.tsx`.
- Per-set display configuration lives in `config.ts`.

Add a new deck (example: "my-new-deck")
1) Create data
   - Add a JSON file under `data/writing-exercises/flashcards/` (e.g. `my-new-deck.json`).
   - Structure is flexible, but you must map it to the generic card shape `{ id, term, definition, example?, additionalInfo? }` in your page.

2) Add a route
   - Create `app/writing-exercises/flashcards/my-new-deck/page.tsx`.
   - Import your JSON and map it to the `FlashcardGame` card shape:
     ```ts
     import { FlashcardGame } from "@/app/components/flashcards/FlashcardGame";
     import { FlashcardPageShell } from "../FlashcardPageShell";
     import { FLASHCARD_CONFIGS } from "../config";
     import data from "@/data/writing-exercises/flashcards/my-new-deck.json";

     export default function Page() {
       const cards = Object.entries(data as Record<string, any>).map(([id, item]) => ({
         id,
         term: item.term,              // or item.name, depending on your data
         definition: item.definition,
         example: item.example,
         additionalInfo: {
           // map any extra fields here; these are referenced by config.layout
         },
       }));

       return (
         <FlashcardPageShell title="My New Deck" subtitle="Optional subtitle">
           <FlashcardGame
             cards={cards}
             title="My New Deck"
             subtitle="Optional subtitle"
             config={FLASHCARD_CONFIGS.myNewDeck}
           />
         </FlashcardPageShell>
       );
     }
     ```

3) Configure how the card renders
   - In `app/writing-exercises/flashcards/config.ts`, add a new entry to `FLASHCARD_CONFIGS` with a unique key (e.g. `myNewDeck`).
   - Choose which `additionalInfo` fields appear where:
     - `layout.mainFields`: Primary two-column content
     - `layout.secondaryFields`: Secondary grid (smaller panels)
     - `layout.footerFields`: Small text at the bottom
   - Optional: set `subheaderField` to show a small line under the term (e.g. pronunciation).

4) Reuse shared styling
   - Card flipping and controls are handled by `FlashcardGame` and `FlashcardCard`.
   - To tweak visual style for all decks, edit those two shared components.

Notes
- Performance-sensitive environments can reduce heavy effects by adjusting blur/gradient intensity in the shared components.
- Keep JSON keys stable once referenced in `config.ts` to avoid missing fields on render.


