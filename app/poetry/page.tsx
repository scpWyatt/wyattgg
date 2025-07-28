import { Metadata } from "next";
import Link from "next/link";
import { BookOpenIcon, UserIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Wyatt.gg | Poetry",
    description: "Explore the world of poetry with interactive flashcards and learning tools",
};

const categories = [
    {
        title: "Poets",
        description: "Meet the masters of verse",
        icon: UserIcon,
        href: "/poetry/flashcards/poets",
        gradient: "from-purple-900 to-indigo-900",
        hoverGradient: "from-purple-800 to-indigo-800",
        borderColor: "border-purple-500/20",
        hoverBorderColor: "border-purple-500/40",
        emoji: "👨‍🎨"
    },
    {
        title: "Poems",
        description: "Timeless verses and classic works",
        icon: BookOpenIcon,
        href: "/poetry/flashcards/poems",
        gradient: "from-green-900 to-teal-900",
        hoverGradient: "from-green-800 to-teal-800",
        borderColor: "border-green-500/20",
        hoverBorderColor: "border-green-500/40",
        emoji: "📜"
    },
    {
        title: "Poetic Terms",
        description: "Master the language of poetry",
        icon: AcademicCapIcon,
        href: "/poetry/flashcards/terms",
        gradient: "from-orange-900 to-red-900",
        hoverGradient: "from-orange-800 to-red-800",
        borderColor: "border-orange-500/20",
        hoverBorderColor: "border-orange-500/40",
        emoji: "📚"
    }
];

export default function PoetryPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
            <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <div className="bg-gray-800/50 rounded-lg p-4 sm:p-8 backdrop-blur-sm">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                            Explore the World of{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                                Poetry
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 mb-8">
                            Discover poets, master poems, and learn the language of verse
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                                Choose Your Path
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {categories.map((category) => (
                                    <Link
                                        key={category.title}
                                        href={category.href}
                                        className={`block bg-gradient-to-br ${category.gradient} p-6 rounded-lg 
                                                 hover:${category.hoverGradient} transition-all transform 
                                                 hover:scale-[1.02] border-2 ${category.borderColor} 
                                                 hover:${category.hoverBorderColor} shadow-xl`}
                                    >
                                        <div className="flex flex-col items-center gap-4 text-center">
                                            <span className="text-4xl">{category.emoji}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">
                                                    {category.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gray-700/50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4 text-center">
                                Poetry Collection
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-purple-400">50+</div>
                                    <div className="text-gray-300 text-sm">Poets</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-400">100+</div>
                                    <div className="text-gray-300 text-sm">Poems</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-orange-400">75+</div>
                                    <div className="text-gray-300 text-sm">Terms</div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
                                Featured This Week
                            </h2>
                            <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-lg border-2 border-blue-500/20">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        William Shakespeare
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        The Bard of Avon's timeless sonnets and dramatic verse
                                    </p>
                                    <Link
                                        href="/poetry/flashcards/poets"
                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                    >
                                        Explore Shakespeare
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 