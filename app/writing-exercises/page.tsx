"use client";

import Link from "next/link";

export default function WritingExercisesLanding() {
  return (
    <div className="relative text-white">
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-16 lg:pb-10 xl:pt-14 xl:pb-8 2xl:pt-12 2xl:pb-6">
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-black/40">
          <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl overflow-visible">
            <div aria-hidden className="pointer-events-none absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-[1.25rem] bg-gradient-to-b from-white/10 to-transparent blur-xl opacity-30" />

            {/* Hero */}
            <div className="px-4 sm:px-8 pt-10 sm:pt-14 pb-8 sm:pb-10 lg:pb-8 text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/90" />
                Writing Exercises
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500">Practice and Improve</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-300/90">
                Explore interactive tools to study story structure, master literary devices, and boost productivity.
              </p>
            </div>

            {/* Story Structure Section */}
            <div className="px-4 sm:px-8 pb-8 sm:pb-10 lg:pb-8 xl:pb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Story Structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <Link href="/writing-exercises/heroes-journey" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-3xl">🦸</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Hero's Journey</h3>
                      <p className="text-gray-300 text-sm">Classic monomyth structure</p>
                    </div>
                  </div>
                </Link>

                <Link href="/writing-exercises/kishotenketsu" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-3xl">🎋</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Kishōtenketsu</h3>
                      <p className="text-gray-300 text-sm">Japanese four-part structure</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Story Development Section */}
            <div className="px-4 sm:px-8 pb-8 sm:pb-10 lg:pb-8 xl:pb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Story Development</h2>
              <div className="flex justify-center">
                <Link href="/writing-exercises/but-therefore" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px] max-w-xl w-full">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-orange-500/10 via-red-500/10 to-transparent" />
                  <div className="relative flex items-center gap-3 justify-center">
                    <span className="text-3xl">📖</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">But/Therefore Story Builder</h3>
                      <p className="text-gray-300 text-sm">Create engaging story progressions</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Literary Device Mastery Section */}
            <div className="px-4 sm:px-8 pb-8 sm:pb-10 lg:pb-8 xl:pb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Literary Device Mastery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Link href="/writing-exercises/flashcards/literary-devices" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-emerald-500/10 via-lime-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-3xl">📚</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Study</h3>
                      <p className="text-gray-300 text-sm">Learn with flashcards</p>
                    </div>
                  </div>
                </Link>

                <Link href="/writing-exercises/quiz" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-purple-500/10 via-fuchsia-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-3xl">📝</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Quiz</h3>
                      <p className="text-gray-300 text-sm">Test your knowledge</p>
                    </div>
                  </div>
                </Link>

                <Link href="/writing-exercises/practice" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-sky-500/10 via-cyan-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-3xl">✍️</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Create</h3>
                      <p className="text-gray-300 text-sm">Practice writing examples</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Poetry Section */}
            <div className="px-4 sm:px-8 pb-8 sm:pb-10 lg:pb-8 xl:pb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Poetry Studies</h2>
              <div className="flex justify-center">
                <Link href="/poetry" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px] max-w-xl w-full">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent" />
                  <div className="relative flex items-center gap-3 justify-center">
                    <span className="text-3xl">📜</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Poetry Flashcards</h3>
                      <p className="text-gray-300 text-sm">Study poets, poems, and poetic terms</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Flashcards Section */}
            <div className="px-4 sm:px-8 pb-6 sm:pb-8 lg:pb-6 xl:pb-4 2xl:pb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Study with Flashcards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Link href="/writing-exercises/flashcards/literary-devices" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-sky-500/10 via-blue-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Literary Devices</h3>
                      <p className="text-gray-300 text-xs">Master writing tools</p>
                    </div>
                  </div>
                </Link>

                <Link href="/writing-exercises/flashcards/heroes-journey" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-purple-500/10 via-fuchsia-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-2xl">🦸</span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Hero's Journey</h3>
                      <p className="text-gray-300 text-xs">Study the monomyth</p>
                    </div>
                  </div>
                </Link>

                <Link href="/writing-exercises/flashcards/save-the-cat" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-emerald-500/10 via-lime-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-2xl">🐱</span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Save the Cat!</h3>
                      <p className="text-gray-300 text-xs">Learn screenplay beats</p>
                    </div>
                  </div>
                </Link>

                <Link href="/writing-exercises/flashcards/storytelling" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-orange-500/10 via-amber-500/10 to-transparent" />
                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <span className="text-2xl">📖</span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Storytelling</h3>
                      <p className="text-gray-300 text-xs">Core narrative concepts</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tools Section */}
            <div className="px-4 sm:px-8 pb-6 sm:pb-8 lg:pb-6 xl:pb-4 2xl:pb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Productivity Tools</h2>
              <div className="flex justify-center">
                <Link href="/writing-exercises/pomodoro" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-colors duration-150 ease-out hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 transform-gpu will-change-transform hover:translate-y-[-2px] max-w-xl w-full">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-tr from-red-500/10 via-orange-500/10 to-transparent" />
                  <div className="relative flex items-center gap-3 justify-center">
                    <span className="text-3xl">🍅</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Pomodoro Timer</h3>
                      <p className="text-gray-300 text-sm">Stay focused with timed work sessions</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
