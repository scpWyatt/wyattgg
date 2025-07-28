import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
    title: string;
    subtitle: string;
    backHref: string;
    backText: string;
}

export default function Header({ title, subtitle, backHref, backText }: HeaderProps) {
    return (
        <div className="mb-8">
            <Link
                href={backHref}
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-4"
            >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                {backText}
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
            <p className="text-gray-300 text-lg">{subtitle}</p>
        </div>
    );
} 