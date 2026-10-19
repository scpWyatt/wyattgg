import { act, renderHook } from "@testing-library/react";
import { useWritingExercise } from "@/app/writing-exercises/hooks/useWritingExercise";
import { useQuiz } from "@/app/writing-exercises/hooks/useQuiz";
import { useButThereforeExercise } from "@/app/writing-exercises/hooks/useButThereforeExercise";
import { useKishotenketsuExercise } from "@/app/writing-exercises/kishotenketsu/hooks/useKishotenketsuExercise";

test("writing practice keeps answers across navigation and clears them on restart", () => {
  const { result } = renderHook(() => useWritingExercise(), { reactStrictMode: true });
  act(() => result.current.beginExercise());
  expect(result.current.currentSentence).not.toBe("");
  act(() => result.current.handleAnswerChange("A sample response."));
  act(() => result.current.goToNext());
  act(() => result.current.goToPrevious());
  expect(result.current.userAnswers[result.current.deviceKeys[0]]).toBe("A sample response.");
  act(() => result.current.submitExercises());
  expect(result.current.exerciseState).toBe("completed");
  act(() => result.current.restartExercise());
  expect(result.current.exerciseState).toBe("start");
  expect(result.current.userAnswers).toEqual({});
});

test("a quiz can complete with a perfect score and restart", () => {
  const { result } = renderHook(() => useQuiz());
  act(() => result.current.beginQuiz());
  const total = result.current.progress.total;
  expect(total).toBeGreaterThan(0);
  for (let i = 0; i < total; i++) {
    act(() => result.current.handleAnswer(result.current.currentQuestion.correctDefinition));
  }
  expect(result.current.quizState).toBe("completed");
  expect(result.current.results.totalCorrect).toBe(total);
  expect(result.current.results.grade).toBe("A");
  act(() => result.current.restartQuiz());
  expect(result.current.quizState).toBe("start");
  expect(result.current.results.answers).toEqual([]);
});

test("a short But/Therefore story alternates connectors and completes after five beats", () => {
  const { result } = renderHook(() => useButThereforeExercise());
  act(() => result.current.beginExercise("short", "standard"));
  for (let i = 0; i < 5; i++) {
    act(() => result.current.submitBeat(`Story beat ${i + 1}`));
  }
  expect(result.current.exerciseState).toBe("completed");
  expect(result.current.storyBeats).toHaveLength(5);
  for (let i = 1; i < 5; i++) {
    expect(result.current.storyBeats[i].type).not.toBe(result.current.storyBeats[i - 1].type);
  }
  act(() => result.current.resetExercise());
  expect(result.current.storyBeats).toEqual([]);
});

test("Kishotenketsu preserves all four story parts and resets", () => {
  const { result } = renderHook(() => useKishotenketsuExercise());
  act(() => result.current.beginExercise());
  for (let i = 1; i <= 4; i++) {
    act(() => result.current.submitPart(`Part ${i}`));
  }
  expect(result.current.exerciseState).toBe("completed");
  expect(result.current.storyParts.map(part => part.content)).toEqual(["Part 1", "Part 2", "Part 3", "Part 4"]);
  act(() => result.current.resetExercise());
  expect(result.current.currentPart).toBe(1);
  expect(result.current.storyParts).toEqual([]);
});
