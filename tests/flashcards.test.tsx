import { act, fireEvent, render, screen } from "@testing-library/react";
import FlashcardGame from "@/app/components/flashcards/FlashcardGame";

const cards = [
  { id: "one", term: "Metaphor", definition: "A direct comparison." },
  { id: "two", term: "Simile", definition: "A comparison using like or as." },
];

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

test("a deck can start, reveal answers, review a saved card, and restart", () => {
  render(<FlashcardGame cards={cards} title="Test deck" subtitle="Study" />, { reactStrictMode: true });

  fireEvent.click(screen.getByRole("button", { name: "Start Learning" }));
  expect(screen.getByText("Card 1 of 2")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Show Answer" }));
  fireEvent.click(screen.getByRole("button", { name: "Practice Again Later" }));
  act(() => jest.advanceTimersByTime(300));
  expect(screen.getByText("Card 2 of 2")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Show Answer" }));
  fireEvent.click(screen.getByRole("button", { name: "Start Practice" }));
  act(() => jest.advanceTimersByTime(300));
  expect(screen.getByText("Reviewing card 1 of 1")).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Practice Again Later" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Shuffle Deck" }));
  act(() => jest.advanceTimersByTime(300));
  expect(screen.getByText("Card 1 of 2")).toBeInTheDocument();
});

test("reverse mode starts a usable deck", () => {
  render(<FlashcardGame cards={cards} title="Test deck" subtitle="Study" config={{ reverseMode: true }} />);
  fireEvent.click(screen.getByRole("button", { name: "Reverse Mode" }));
  expect(screen.getByText("Card 1 of 2")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Show Answer" }));
  expect(screen.getByRole("button", { name: "Next Card" })).toBeInTheDocument();
});
