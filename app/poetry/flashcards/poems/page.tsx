"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import StartScreen from "../components/StartScreen";
import { Poem } from "../../types";

// Import actual data from JSON file
import poemsData from "@/data/poetry/poems.json";

const typedPoems = poemsData as { [key: string]: Poem };

function shuffleDeck(): Poem[] {
    const poems = Object.values(typedPoems);
    for (let i = poems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [poems[i], poems[j]] = [poems[j], poems[i]];
    }
    return poems;
}

export default function PoemsFlashcards() {
    const [isStarted, setIsStarted] = useState(false);
    const [isReverseMode, setIsReverseMode] = useState(false);
    const [deck, setDeck] = useState<Poem[]>([]);
    const [practiceDeck, setPracticeDeck] = useState<Poem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInPracticeMode, setIsInPracticeMode] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (deck.length > 0) {
            setCurrentIndex(0);
            setIsFlipped(false);
        }
    }, [deck.length]);

    const handleNext = () => {
        if (currentIndex < deck.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
        } else if (!isInPracticeMode && practiceDeck.length > 0) {
            setDeck(practiceDeck);
            setPracticeDeck([]);
            setCurrentIndex(0);
            setIsInPracticeMode(true);
            setIsFlipped(false);
        }
    };

    const handleAddToPracticeDeck = (poem: Poem) => {
        setPracticeDeck([...practiceDeck, poem]);
        if (currentIndex === deck.length - 1) {
            setDeck([...practiceDeck, poem]);
            setPracticeDeck([]);
            setCurrentIndex(0);
            setIsInPracticeMode(true);
            setIsFlipped(false);
        } else {
            handleNext();
        }
    };

    const handleBegin = (reverse: boolean) => {
        setIsReverseMode(reverse);
        setDeck(shuffleDeck());
        setIsStarted(true);
    };

    const handleShuffle = () => {
        setDeck(shuffleDeck());
        setPracticeDeck([]);
        setCurrentIndex(0);
        setIsInPracticeMode(false);
        setIsFlipped(false);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    if (!isStarted) {
        return (
            <StartScreen
                title="Poems Flashcards"
                subtitle="Study timeless verses and classic works"
                onBegin={handleBegin}
            />
        );
    }

    const currentPoem = deck[currentIndex];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <Header
                    title="Poems Flashcards"
                    subtitle="Analyze and understand classic poems"
                    backHref="/poetry/flashcards"
                    backText="Back to Poetry Flashcards"
                />

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Card {currentIndex + 1} of {deck.length}</span>
                        {isInPracticeMode && <span className="text-green-400">Practice Mode</span>}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                            className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Flashcard */}
                <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-lg p-8 mb-8 shadow-xl border-2 border-green-500/20">
                    <div 
                        className="cursor-pointer"
                        onClick={handleFlip}
                        onKeyDown={(e) => e.key === ' ' && handleFlip()}
                        tabIndex={0}
                    >
                        {!isFlipped ? (
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    {isReverseMode ? currentPoem.excerpt : currentPoem.title}
                                </h2>
                                {!isReverseMode && (
                                    <div className="text-green-300 text-lg mb-2">
                                        by {currentPoem.author}
                                    </div>
                                )}
                                {!isReverseMode && currentPoem.firstLine && (
                                    <div className="text-gray-300 italic mb-4">
                                        "{currentPoem.firstLine}"
                                    </div>
                                )}
                                <p className="text-gray-300 text-sm">
                                    Click to reveal {isReverseMode ? 'the poem details' : 'analysis and context'}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {currentPoem.title}
                                    </h2>
                                    <div className="text-green-300 text-lg mb-2">
                                        by {currentPoem.author}
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        {currentPoem.dateOfPublication} • {currentPoem.lineCount} lines
                                    </div>
                                </div>

                                {currentPoem.excerpt && (
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Excerpt:</h3>
                                        <div className="bg-green-800/50 rounded p-4">
                                            <pre className="text-gray-300 whitespace-pre-wrap font-serif">
                                                {currentPoem.excerpt}
                                            </pre>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Form & Structure:</h3>
                                        <div className="space-y-2">
                                            <div className="bg-green-800/50 rounded p-3">
                                                <div className="font-medium text-white">Type: {currentPoem.poemType}</div>
                                            </div>
                                            {currentPoem.meter && (
                                                <div className="bg-green-800/50 rounded p-3">
                                                    <div className="font-medium text-white">Meter: {currentPoem.meter}</div>
                                                </div>
                                            )}
                                            {currentPoem.rhymeScheme && (
                                                <div className="bg-green-800/50 rounded p-3">
                                                    <div className="font-medium text-white">Rhyme: {currentPoem.rhymeScheme}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Content:</h3>
                                        <div className="space-y-2">
                                            <div>
                                                <div className="font-medium text-white mb-1">Subjects:</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {currentPoem.subject.map((subject, index) => (
                                                        <span key={index} className="bg-teal-600 text-white px-2 py-1 rounded text-sm">
                                                            {subject}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-white mb-1">Themes:</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {currentPoem.themes.map((theme, index) => (
                                                        <span key={index} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                                                            {theme}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={handleShuffle}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                    >
                        Shuffle Deck
                    </button>

                    <div className="flex gap-4">
                        {!isInPracticeMode && (
                            <button
                                onClick={() => handleAddToPracticeDeck(currentPoem)}
                                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded transition-colors"
                            >
                                Add to Practice ({practiceDeck.length})
                            </button>
                        )}
                        
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === deck.length - 1 && practiceDeck.length === 0}
                            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded transition-colors"
                        >
                            {currentIndex === deck.length - 1 && practiceDeck.length === 0 ? 'Finished' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 