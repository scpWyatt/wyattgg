"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import StartScreen from "../components/StartScreen";
import { PoeticTerm } from "../../types";

// Import actual data from JSON file
import poeticTermsData from "@/data/poetry/poetic-terms.json";

const typedPoeticTerms = poeticTermsData as { [key: string]: PoeticTerm };

function shuffleDeck(): PoeticTerm[] {
    const terms = Object.values(typedPoeticTerms);
    for (let i = terms.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [terms[i], terms[j]] = [terms[j], terms[i]];
    }
    return terms;
}

export default function PoeticTermsFlashcards() {
    const [isStarted, setIsStarted] = useState(false);
    const [isReverseMode, setIsReverseMode] = useState(false);
    const [deck, setDeck] = useState<PoeticTerm[]>([]);
    const [practiceDeck, setPracticeDeck] = useState<PoeticTerm[]>([]);
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
            // Switch to practice deck
            setDeck(practiceDeck);
            setPracticeDeck([]);
            setCurrentIndex(0);
            setIsInPracticeMode(true);
            setIsFlipped(false);
        }
    };

    const handleAddToPracticeDeck = (term: PoeticTerm) => {
        setPracticeDeck([...practiceDeck, term]);
        if (currentIndex === deck.length - 1) {
            // If this is the last card, immediately switch to practice deck
            setDeck([...practiceDeck, term]);
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
                title="Poetic Terms Flashcards"
                subtitle="Master the language and techniques of poetry"
                onBegin={handleBegin}
            />
        );
    }

    const currentTerm = deck[currentIndex];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <Header
                    title="Poetic Terms Flashcards"
                    subtitle="Study poetic terms and techniques"
                    backHref="/poetry/flashcards"
                    backText="Back to Poetry Flashcards"
                />

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Card {currentIndex + 1} of {deck.length}</span>
                        {isInPracticeMode && <span className="text-orange-400">Practice Mode</span>}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Flashcard */}
                <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-lg p-8 mb-8 shadow-xl border-2 border-orange-500/20">
                    <div 
                        className="cursor-pointer"
                        onClick={handleFlip}
                        onKeyDown={(e) => e.key === ' ' && handleFlip()}
                        tabIndex={0}
                    >
                        {!isFlipped ? (
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    {isReverseMode ? currentTerm.definition : currentTerm.term}
                                </h2>
                                {currentTerm.pronunciation && (
                                    <p className="text-orange-300 text-lg mb-4">
                                        {currentTerm.pronunciation}
                                    </p>
                                )}
                                <p className="text-gray-300 text-sm">
                                    Click to reveal {isReverseMode ? 'the term' : 'the definition'}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {isReverseMode ? currentTerm.term : currentTerm.definition}
                                    </h2>
                                    {!isReverseMode && currentTerm.pronunciation && (
                                        <p className="text-orange-300 text-lg">
                                            {currentTerm.pronunciation}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    {isReverseMode && (
                                        <div>
                                            <h3 className="text-white font-semibold mb-2">Definition:</h3>
                                            <p className="text-gray-300">{currentTerm.definition}</p>
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Example:</h3>
                                        <p className="text-gray-300 italic">{currentTerm.example}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Why Use It:</h3>
                                        <p className="text-gray-300">{currentTerm.whyUseIt}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">How to Use It:</h3>
                                        <p className="text-gray-300">{currentTerm.howToUseIt}</p>
                                    </div>

                                    {currentTerm.etymology && (
                                        <div>
                                            <h3 className="text-white font-semibold mb-2">Etymology:</h3>
                                            <p className="text-gray-300 text-sm">{currentTerm.etymology}</p>
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Category:</h3>
                                        <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                                            {currentTerm.category}
                                        </span>
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
                                onClick={() => handleAddToPracticeDeck(currentTerm)}
                                className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded transition-colors"
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