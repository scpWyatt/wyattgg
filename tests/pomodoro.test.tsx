import { useState } from "react";
import { act, fireEvent, render, renderHook, screen } from "@testing-library/react";
import { usePomodoroTimer, type TimerSettings } from "@/app/writing-exercises/pomodoro/hooks/usePomodoroTimer";
import Settings from "@/app/writing-exercises/pomodoro/components/TimerSettings";

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

test("the timer starts, pauses, resumes and resets without requiring audio support", () => {
  const { result, unmount } = renderHook(() => usePomodoroTimer(), { reactStrictMode: true });
  act(() => result.current.startTimer());
  act(() => jest.advanceTimersByTime(5000));
  expect(result.current.timeRemaining).toBe(1495);
  act(() => result.current.pauseTimer());
  act(() => jest.advanceTimersByTime(5000));
  expect(result.current.timeRemaining).toBe(1495);
  act(() => result.current.startTimer());
  act(() => jest.advanceTimersByTime(2000));
  expect(result.current.timeRemaining).toBe(1493);
  act(() => result.current.resetTimer());
  expect(result.current.timeRemaining).toBe(1500);
  expect(result.current.isActive).toBe(false);
  unmount();
  expect(jest.getTimerCount()).toBe(0);
});

test("completed sessions select short and long breaks and honor automation settings", () => {
  const { result } = renderHook(() => usePomodoroTimer());
  act(() => result.current.updateSettings({
    ...result.current.settings,
    pomodoroTime: 1,
    longBreakInterval: 2,
    autoStartBreaks: false,
  }));
  act(() => result.current.startTimer());
  act(() => jest.advanceTimersByTime(60000));
  expect(result.current.timerState).toBe("SHORT_BREAK");
  expect(result.current.completedPomodoros).toBe(1);
  expect(result.current.isActive).toBe(false);
  act(() => result.current.skipTimer());
  expect(result.current.timerState).toBe("POMODORO");
  act(() => result.current.startTimer());
  act(() => jest.advanceTimersByTime(60000));
  expect(result.current.timerState).toBe("LONG_BREAK");
  expect(result.current.timeRemaining).toBe(900);
  expect(result.current.completedPomodoros).toBe(2);
});

test("changing the active duration preserves elapsed time", () => {
  const { result } = renderHook(() => usePomodoroTimer());
  act(() => result.current.startTimer());
  act(() => jest.advanceTimersByTime(10000));
  act(() => result.current.updateSettings({ ...result.current.settings, pomodoroTime: 1 }));
  expect(result.current.timeRemaining).toBe(50);
  act(() => jest.advanceTimersByTime(1000));
  expect(result.current.timeRemaining).toBe(49);
});

test("settings track unsaved edits and show the saved values in Strict Mode", () => {
  function Harness() {
    const [settings, setSettings] = useState<TimerSettings>({
      pomodoroTime: 25, shortBreakTime: 5, longBreakTime: 15,
      longBreakInterval: 4, autoStartBreaks: true, autoStartPomodoros: true,
    });
    return <Settings settings={settings} onUpdateSettings={setSettings} />;
  }
  render(<Harness />, { reactStrictMode: true });
  expect(screen.getByRole("button", { name: "No Changes" })).toBeDisabled();
  fireEvent.change(screen.getByLabelText("Focus Session"), { target: { value: "30" } });
  fireEvent.click(screen.getByRole("button", { name: "Save Changes" }));
  expect(screen.getByLabelText("Focus Session")).toHaveValue(30);
  expect(screen.getByRole("button", { name: "No Changes" })).toBeDisabled();
  fireEvent.change(screen.getByLabelText("Focus Session"), { target: { value: "20" } });
  fireEvent.change(screen.getByLabelText("Focus Session"), { target: { value: "30" } });
  expect(screen.getByRole("button", { name: "No Changes" })).toBeDisabled();
});
