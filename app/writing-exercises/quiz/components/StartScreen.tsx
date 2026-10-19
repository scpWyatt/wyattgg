import Header from "../../components/Header";

type StartScreenProps = {
    onBegin: () => void;
};

export default function StartScreen({ onBegin }: StartScreenProps) {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-blue-900">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <Header
                    title="Literary Devices Quiz"
                    subtitle="Test your knowledge of literary devices with multiple choice questions"
                />
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                    <p className="text-gray-300 text-lg mb-8">
                        You&apos;ll be presented with literary devices and their definitions. Choose the correct definition
                        for each device. Your final grade will be shown at the end.
                    </p>
                    <button
                        onClick={onBegin}
                        className="px-8 py-3 bg-purple-600 text-white rounded-lg text-xl
                                 hover:bg-purple-700 transition-colors"
                    >
                        Begin Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}
