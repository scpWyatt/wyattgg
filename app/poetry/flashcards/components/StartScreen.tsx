interface StartScreenProps {
    title: string;
    subtitle: string;
    onBegin: (reverse: boolean) => void; // eslint-disable-line
}

export default function StartScreen({ title, subtitle, onBegin }: StartScreenProps) {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
                    <p className="text-xl text-gray-300 mb-12">{subtitle}</p>
                    
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4">Choose Study Mode</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <button
                                    onClick={() => onBegin(false)}
                                    className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg 
                                             hover:from-blue-500 hover:to-purple-500 transition-all transform 
                                             hover:scale-[1.02] shadow-lg"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">Normal Mode</h3>
                                    <p className="text-gray-200 text-sm">
                                        See the question first, then reveal the answer
                                    </p>
                                </button>
                                
                                <button
                                    onClick={() => onBegin(true)}
                                    className="bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-lg 
                                             hover:from-green-500 hover:to-teal-500 transition-all transform 
                                             hover:scale-[1.02] shadow-lg"
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">Reverse Mode</h3>
                                    <p className="text-gray-200 text-sm">
                                        See the answer first, then guess the question
                                    </p>
                                </button>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-lg p-6 max-w-2xl mx-auto">
                            <h3 className="text-lg font-semibold text-white mb-3">How to Study</h3>
                            <ul className="text-gray-300 text-sm space-y-2 text-left">
                                <li>• Click or press spacebar to flip cards</li>
                                <li>• Add difficult cards to practice deck</li>
                                <li>• Use arrow keys or buttons to navigate</li>
                                <li>• Shuffle the deck anytime for variety</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 