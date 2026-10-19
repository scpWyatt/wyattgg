import { Header } from "@/components/Header.component";
import { Footer } from "@/components/Footer.component";
import "../styles/globals.css";
import { Figtree, Space_Grotesk } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${spaceGrotesk.variable} dark font-sans min-h-screen flex flex-col relative antialiased`}
      >
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#06070b]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_-12%,rgba(45,212,191,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_480px_at_100%_20%,rgba(56,189,248,0.06),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        </div>

        <Header />
        <main className="grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
