import { Header } from "@/components/Header.component";
import { Footer } from "@/components/Footer.component";
import "../styles/globals.css";
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} dark font-sans min-h-screen flex flex-col relative`}>
        {/* Global background behind header/main/footer */}
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070a12] via-[#0b1220] to-black" />
          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />
          {/* Tone down color accents to lean darker/colder */}
          <div className="absolute inset-0 opacity-20 blur-3xl bg-[conic-gradient(at_20%_20%,#0ea5e9_0deg,#2563eb_120deg,#1f2937_240deg,#0ea5e9_360deg)]" />
          <div className="absolute inset-0 opacity-18 bg-[radial-gradient(900px_600px_at_50%_-10%,rgba(56,189,248,0.14),transparent_60%),radial-gradient(1100px_700px_at_10%_10%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(1000px_700px_at_90%_20%,rgba(2,132,199,0.12),transparent_55%),radial-gradient(1200px_900px_at_50%_100%,rgba(2,6,23,0.15),transparent_60%)]" />
        </div>

        <Header />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}