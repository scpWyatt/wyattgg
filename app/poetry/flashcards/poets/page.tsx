"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import StartScreen from "../components/StartScreen";
import { Poet } from "../../types";

// Import actual data from JSON file
import poetsData from "@/data/poetry/poets.json";

const typedPoets = poetsData as { [key: string]: Poet };

function shuffleDeck(): Poet[] {
    const poets = Object.values(typedPoets);
    for (let i = poets.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [poets[i], poets[j]] = [poets[j], poets[i]];
    }
    return poets;
}

export default function PoetsFlashcards() {
    const [isStarted, setIsStarted] = useState(false);
    const [isReverseMode, setIsReverseMode] = useState(false);
    const [deck, setDeck] = useState<Poet[]>([]);
    const [practiceDeck, setPracticeDeck] = useState<Poet[]>([]);
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

    const handleAddToPracticeDeck = (poet: Poet) => {
        setPracticeDeck([...practiceDeck, poet]);
        if (currentIndex === deck.length - 1) {
            setDeck([...practiceDeck, poet]);
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
                title="Poets Flashcards"
                subtitle="Learn about the masters of verse"
                onBegin={handleBegin}
            />
        );
    }

    const currentPoet = deck[currentIndex];

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <Header
                    title="Poets Flashcards"
                    subtitle="Study the lives and works of great poets"
                    backHref="/poetry/flashcards"
                    backText="Back to Poetry Flashcards"
                />

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Card {currentIndex + 1} of {deck.length}</span>
                        {isInPracticeMode && <span className="text-purple-400">Practice Mode</span>}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                            className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Flashcard */}
                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg p-8 mb-8 shadow-xl border-2 border-purple-500/20">
                    <div 
                        className="cursor-pointer"
                        onClick={handleFlip}
                        onKeyDown={(e) => e.key === ' ' && handleFlip()}
                        tabIndex={0}
                    >
                        {!isFlipped ? (
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    {isReverseMode ? currentPoet.briefBio : currentPoet.name}
                                </h2>
                                {!isReverseMode && (
                                    <div className="text-purple-300 text-lg">
                                        {currentPoet.dateOfBirth} - {currentPoet.dateOfDeath}
                                    </div>
                                )}
                                <p className="text-gray-300 text-sm mt-4">
                                    Click to reveal {isReverseMode ? 'the poet' : 'biographical details'}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {isReverseMode ? currentPoet.name : currentPoet.name}
                                    </h2>
                                    <div className="text-purple-300 text-lg mb-2">
                                        {currentPoet.dateOfBirth} - {currentPoet.dateOfDeath}
                                    </div>
                                    <div className="text-gray-300">
                                        {currentPoet.nationality} • {currentPoet.literaryMovement}
                                    </div>
                                </div>

                                {currentPoet.briefBio && (
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Biography:</h3>
                                        <p className="text-gray-300">{currentPoet.briefBio}</p>
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-white font-semibold mb-2">Notable Works:</h3>
                                    <div className="space-y-2">
                                        {currentPoet.notableWorks.map((work, index) => (
                                            <div key={index} className="bg-purple-800/50 rounded p-3">
                                                <div className="font-medium text-white">{work.title}</div>
                                                <div className="text-sm text-gray-300">
                                                    {work.publicationYear} • {work.type}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {currentPoet.keyLifeEvents.length > 0 && (
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">Key Life Events:</h3>
                                        <div className="space-y-2">
                                            {currentPoet.keyLifeEvents.map((event, index) => (
                                                <div key={index} className="bg-indigo-800/50 rounded p-3">
                                                    <div className="font-medium text-white">{event.year}</div>
                                                    <div className="text-gray-300">{event.event}</div>
                                                    {event.significance && (
                                                        <div className="text-sm text-purple-300 italic">
                                                            {event.significance}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
                                onClick={() => handleAddToPracticeDeck(currentPoet)}
                                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded transition-colors"
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