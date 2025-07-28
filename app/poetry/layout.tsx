import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Poetry | Wyatt.gg",
    description: "Explore poetry with interactive flashcards and learning tools",
};

export default function PoetryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
            {children}
        </div>
    );
} 