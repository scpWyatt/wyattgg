import type { Metadata } from "next";
import WorkClock from "./WorkClock";

export const metadata: Metadata = {
  title: "Focus | Wyatt.gg",
  robots: { index: false, follow: false },
};

export default function FocusPage() {
  return <WorkClock />;
}
