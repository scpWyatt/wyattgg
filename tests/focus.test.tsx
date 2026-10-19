import { act, fireEvent, render, screen } from "@testing-library/react";
import WorkClock from "@/app/focus/WorkClock";

const storageKey = "wyattgg.focus-session.v1";

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2026-10-19T10:00:00Z"));
  localStorage.clear();
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test("counts only working time across pause, resume, and reset", () => {
  const { unmount } = render(<WorkClock />, { reactStrictMode: true });
  expect(screen.getByRole("timer")).toHaveTextContent("00:00:00");
  expect(screen.getByRole("button", { name: "Reset" })).toBeDisabled();
  fireEvent.click(screen.getByRole("button", { name: "Start working" }));
  act(() => jest.advanceTimersByTime(65000));
  expect(screen.getByRole("timer")).toHaveTextContent("00:01:05");
  fireEvent.click(screen.getByRole("button", { name: "Pause" }));
  act(() => jest.advanceTimersByTime(20000));
  expect(screen.getByRole("timer")).toHaveTextContent("00:01:05");
  fireEvent.click(screen.getByRole("button", { name: "Resume" }));
  act(() => jest.advanceTimersByTime(5000));
  expect(screen.getByRole("timer")).toHaveTextContent("00:01:10");
  fireEvent.click(screen.getByRole("button", { name: "Reset" }));
  expect(screen.getByRole("timer")).toHaveTextContent("00:00:00");
  expect(screen.getByRole("button", { name: "Start working" })).toBeEnabled();
  unmount();
  expect(jest.getTimerCount()).toBe(0);
});

test("restores a running session after closing the page and catches up after mobile suspension", () => {
  const { unmount } = render(<WorkClock />);
  fireEvent.click(screen.getByRole("button", { name: "Start working" }));
  unmount();
  act(() => jest.setSystemTime(new Date("2026-10-19T11:05:09Z")));
  render(<WorkClock />);
  expect(screen.getByRole("timer")).toHaveTextContent("01:05:09");
  // No interval callbacks run while the browser is suspended.
  act(() => {
    jest.setSystemTime(new Date("2026-10-19T12:06:10Z"));
    document.dispatchEvent(new Event("visibilitychange"));
  });
  expect(screen.getByRole("timer")).toHaveTextContent("02:06:10");
  fireEvent.click(screen.getByRole("button", { name: "Pause" }));
});

test("restores paused time and follows changes from another tab", () => {
  localStorage.setItem(storageKey, JSON.stringify({ elapsedMs: 90000, startedAt: null }));
  render(<WorkClock />);
  expect(screen.getByRole("timer")).toHaveTextContent("00:01:30");
  expect(screen.getByRole("button", { name: "Resume" })).toBeEnabled();
  act(() => {
    localStorage.removeItem(storageKey);
    window.dispatchEvent(new StorageEvent("storage", { key: storageKey }));
  });
  expect(screen.getByRole("timer")).toHaveTextContent("00:00:00");
});

test("recovers from invalid saved data and keeps working when storage is unavailable", () => {
  localStorage.setItem(storageKey, '{"elapsedMs": "invalid", "startedAt": 1}');
  render(<WorkClock />);
  expect(screen.getByRole("timer")).toHaveTextContent("00:00:00");
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Storage blocked"); });
  fireEvent.click(screen.getByRole("button", { name: "Start working" }));
  act(() => jest.advanceTimersByTime(5000));
  expect(screen.getByRole("timer")).toHaveTextContent("00:00:05");
  fireEvent.click(screen.getByRole("button", { name: "Pause" }));
  expect(screen.getByRole("timer")).toHaveTextContent("00:00:05");
  expect(screen.getByText(/This browser can’t save/)).toBeInTheDocument();
});
