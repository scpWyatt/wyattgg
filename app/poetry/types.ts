// Poet-related types
export interface NotableWork {
    title: string;
    publicationYear: string; // "1609" or "Unknown"
    type: "Poetry" | "Play" | "Novel" | "Essay";
}

export interface LifeEvent {
    year: string;
    event: string;
    significance?: string;
}

export interface Poet {
    id: string;
    name: string;
    dateOfBirth: string; // "1564-04-23" or "Unknown"
    dateOfDeath: string; // "1616-04-23" or "Living" or "Unknown"
    nationality: string;
    literaryMovement: string;
    notableWorks: NotableWork[];
    keyLifeEvents: LifeEvent[];
    portrait?: string; // URL to image
    briefBio?: string; // Short biography
}

// Poem-related types
export type PoemType = 
    | "Sonnet" 
    | "Haiku" 
    | "Epic" 
    | "Ode" 
    | "Ballad" 
    | "Free Verse" 
    | "Villanelle" 
    | "Sestina" 
    | "Limerick" 
    | "Ghazal" 
    | "Lyric"
    | "Other";

export interface Poem {
    id: string;
    title: string;
    author: string;
    authorId: string; // Reference to poet
    dateOfPublication: string; // "1609" or "Unknown"
    lineCount: number;
    poemType: PoemType;
    subject: string[];
    firstLine?: string; // For identification
    themes: string[];
    meter?: string; // "Iambic pentameter", etc.
    rhymeScheme?: string; // "ABAB CDCD EFEF GG"
    excerpt?: string; // First few lines for context
}

// Poetic term types
export type PoeticTermCategory = 
    | "Form" 
    | "Meter" 
    | "Rhyme" 
    | "Figurative Language" 
    | "Sound Devices" 
    | "Structure" 
    | "Movement" 
    | "Technique";

export interface PoeticTerm {
    id: string;
    term: string;
    pronunciation?: string;
    definition: string;
    example: string;
    whyUseIt: string;
    howToUseIt: string;
    category: PoeticTermCategory;
    relatedTerms?: string[]; // IDs of related terms
    etymology?: string;
}

// Flashcard state types
export interface FlashcardState {
    isStarted: boolean;
    isReverseMode: boolean;
    currentIndex: number;
    isInPracticeMode: boolean;
    practiceDeck: any[];
} 