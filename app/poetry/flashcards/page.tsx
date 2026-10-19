"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const flashcardTypes = [
    {
        title: "Poets",
        description: "Learn about the masters of verse",
        href: "/poetry/flashcards/poets",
        gradient: "from-purple-900 to-indigo-900",
        hoverGradient: "from-purple-800 to-indigo-800",
        borderColor: "border-purple-500/20",
        hoverBorderColor: "border-purple-500/40",
        emoji: "👨‍🎨",
        features: ["Biographical information", "Notable works", "Life events", "Literary movements"]
    },
    {
        title: "Poems",
        description: "Study timeless verses and classic works",
        href: "/poetry/flashcards/poems",
        gradient: "from-green-900 to-teal-900",
        hoverGradient: "from-green-800 to-teal-800",
        borderColor: "border-green-500/20",
        hoverBorderColor: "border-green-500/40",
        emoji: "📜",
        features: ["Poem analysis", "Form and structure", "Themes and subjects", "Historical context"]
    },
    {
        title: "Poetic Terms",
        description: "Master the language and techniques of poetry",
        href: "/poetry/flashcards/terms",
        gradient: "from-orange-900 to-red-900",
        hoverGradient: "from-orange-800 to-red-800",
        borderColor: "border-orange-500/20",
        hoverBorderColor: "border-orange-500/40",
        emoji: "📚",
        features: ["Technical definitions", "Usage examples", "Practical applications", "Etymology"]
    }
];

export default function PoetryFlashcardsPage() {
    return (
        <div className="bg-linear-to-br from-gray-900 via-gray-800 to-blue-900">
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/flashcards"
                        className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeftIcon className="h-5 w-5 mr-2" />
                        Back to Flashcards Hub
                    </Link>
                    <h1 className="text-4xl font-bold text-white mb-2">Poetry Flashcards</h1>
                    <p className="text-gray-300 text-lg">
                        Choose a category to start your poetry learning journey
                    </p>
                </div>

                {/* Flashcard Types Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {flashcardTypes.map((type) => (
                        <div
                            key={type.title}
                            className={`bg-linear-to-br ${type.gradient} rounded-lg p-6 border-2 ${type.borderColor}
                                     hover:${type.hoverGradient} hover:${type.hoverBorderColor}
                                     transition-all transform hover:scale-[1.02] shadow-xl`}
                        >
                            <div className="text-center mb-6">
                                <span className="text-5xl mb-4 block">{type.emoji}</span>
                                <h2 className="text-2xl font-bold text-white mb-2">{type.title}</h2>
                                <p className="text-gray-300">{type.description}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-white font-semibold mb-3">What you&apos;ll learn:</h3>
                                <ul className="space-y-2">
                                    {type.features.map((feature, index) => (
                                        <li key={index} className="text-gray-300 text-sm flex items-center">
                                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={type.href}
                                className="block w-full bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-lg
                                         transition-colors duration-200 font-medium"
                            >
                                Start Learning
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Study Tips */}
                <div className="mt-12 bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Study Tips</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-purple-400 font-medium mb-2">For Best Results</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                                <li>• Study in short, focused sessions</li>
                                <li>• Use the practice mode for difficult cards</li>
                                <li>• Review regularly to reinforce learning</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-green-400 font-medium mb-2">Recommended Order</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                                <li>• Start with Poetic Terms for foundation</li>
                                <li>• Then explore Poems to see terms in action</li>
                                <li>• Finally study Poets for historical context</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
