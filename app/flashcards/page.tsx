import Link from "next/link";

export default function FlashcardsHubPage() {
  const groups = [
    {
      title: "Writing Flashcards",
      items: [
        { href: "/writing-exercises/flashcards/literary-devices", title: "Literary Devices", emoji: "📚", overlay: "from-sky-500/10 via-blue-500/10" },
        { href: "/writing-exercises/flashcards/heroes-journey", title: "Hero's Journey", emoji: "🦸", overlay: "from-purple-500/10 via-fuchsia-500/10" },
        { href: "/writing-exercises/flashcards/save-the-cat", title: "Save the Cat!", emoji: "🐱", overlay: "from-emerald-500/10 via-lime-500/10" },
        { href: "/writing-exercises/flashcards/storytelling", title: "Storytelling", emoji: "📖", overlay: "from-orange-500/10 via-amber-500/10" },
      ],
    },
    {
      title: "Poetry Flashcards",
      items: [
        { href: "/poetry/flashcards/poets", title: "Poets", emoji: "👨‍🎨", overlay: "from-purple-500/10 via-indigo-500/10" },
        { href: "/poetry/flashcards/poems", title: "Poems", emoji: "📜", overlay: "from-emerald-500/10 via-teal-500/10" },
        { href: "/poetry/flashcards/terms", title: "Poetic Terms", emoji: "🔤", overlay: "from-orange-500/10 via-red-500/10" },
      ],
    },
  ];

  return (
    <div className="relative text-white">
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-16 lg:pb-12">
        <div className="relative rounded-2xl p-px bg-linear-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/40">
          <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl overflow-visible">
            <div aria-hidden className="pointer-events-none absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-[1.25rem] bg-linear-to-b from-white/10 to-transparent blur-xl opacity-30" />

            <div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-6 sm:pb-8 lg:pb-6 text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/90" />
                Flashcards
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-fuchsia-400 to-purple-500">Study with Flashcards</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-300/90">
                Pick a deck from Writing or Poetry and start learning.
              </p>
            </div>

            <div className="px-4 sm:px-8 pb-12 sm:pb-14 lg:pb-12 xl:pb-10 space-y-10">
              {groups.map((group) => (
                <section key={group.title}>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white/95 mb-2">{group.title}</h2>
                  <div className="h-px w-24 bg-linear-to-r from-white/40 via-white/10 to-transparent rounded-full mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                        <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-linear-to-tr ${item.overlay} to-transparent`} />
                        <div className="relative flex flex-col items-center gap-2 text-center">
                          <span className="text-3xl">{item.emoji}</span>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-gray-300 text-sm">Open deck</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


