# Poetry Expansion Design Document

## Overview
This document outlines the design for expanding Wyatt.gg with a comprehensive poetry section, including interactive flashcard exercises for poets, poems, and poetic terms. The system will follow the existing flashcard architecture while adding poetry-specific features.

## Current Flashcard System Analysis

### Existing Structure
- **Location**: `/app/writing-exercises/flashcards/`
- **Data**: JSON files in `/data/writing-exercises/`
- **Components**: Reusable flashcard components with study/practice modes
- **Features**: Shuffle, reverse mode, practice deck, progress tracking

### Literary Device Structure (Reference)
```json
{
  "metaphor": {
    "name": "Metaphor",
    "pronunciation": "/ˈmɛtəfɔːr/",
    "definition": "A figure of speech that directly refers to one thing by mentioning another...",
    "whyUseIt": "Metaphors create vivid imagery...",
    "howToUseIt": "Use a metaphor to draw a direct comparison...",
    "school": "Descriptive Imagery",
    "example": "The world is a stage where everyone plays a part.",
    "derivation": "From the Greek word 'metaphora'..."
  }
}
```

## Poetry Flashcard Types

### 1. Poet Flashcards

#### Data Structure
```typescript
interface Poet {
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

interface NotableWork {
  title: string;
  publicationYear: string; // "1609" or "Unknown"
  type: "Poetry" | "Play" | "Novel" | "Essay";
}

interface LifeEvent {
  year: string;
  event: string;
  significance?: string;
}
```

#### Example Data
```json
{
  "shakespeare": {
    "id": "shakespeare",
    "name": "William Shakespeare",
    "dateOfBirth": "1564-04-23",
    "dateOfDeath": "1616-04-23",
    "nationality": "English",
    "literaryMovement": "Renaissance",
    "notableWorks": [
      {
        "title": "Sonnet 18",
        "publicationYear": "1609",
        "type": "Poetry"
      },
      {
        "title": "Hamlet",
        "publicationYear": "1603",
        "type": "Play"
      }
    ],
    "keyLifeEvents": [
      {
        "year": "1582",
        "event": "Married Anne Hathaway",
        "significance": "Personal life milestone"
      },
      {
        "year": "1594",
        "event": "Joined Lord Chamberlain's Men",
        "significance": "Professional breakthrough"
      }
    ],
    "briefBio": "Often called England's national poet and the 'Bard of Avon'..."
  }
}
```

### 2. Poem Flashcards

#### Data Structure
```typescript
interface Poem {
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

type PoemType = 
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
  | "Other";
```

#### Example Data
```json
{
  "sonnet18": {
    "id": "sonnet18",
    "title": "Sonnet 18",
    "author": "William Shakespeare",
    "authorId": "shakespeare",
    "dateOfPublication": "1609",
    "lineCount": 14,
    "poemType": "Sonnet",
    "subject": ["Love", "Beauty", "Immortality"],
    "firstLine": "Shall I compare thee to a summer's day?",
    "themes": ["Eternal beauty", "Poetry as preservation", "Love"],
    "meter": "Iambic pentameter",
    "rhymeScheme": "ABAB CDCD EFEF GG",
    "excerpt": "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate..."
  }
}
```

### 3. Poetic Term Flashcards

#### Data Structure
```typescript
interface PoeticTerm {
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

type PoeticTermCategory = 
  | "Form" 
  | "Meter" 
  | "Rhyme" 
  | "Figurative Language" 
  | "Sound Devices" 
  | "Structure" 
  | "Movement" 
  | "Technique";
```

#### Example Data
```json
{
  "sonnet": {
    "id": "sonnet",
    "term": "Sonnet",
    "pronunciation": "/ˈsɒnɪt/",
    "definition": "A 14-line poem with a specific rhyme scheme and meter, typically written in iambic pentameter.",
    "example": "Shakespeare's 'Sonnet 18' begins 'Shall I compare thee to a summer's day?'",
    "whyUseIt": "Sonnets provide a structured form for exploring complex emotions and ideas with precision and elegance.",
    "howToUseIt": "Follow the 14-line structure with the appropriate rhyme scheme (Petrarchan: ABBA ABBA CDE CDE, or Shakespearean: ABAB CDCD EFEF GG).",
    "category": "Form",
    "relatedTerms": ["iambic-pentameter", "rhyme-scheme", "petrarchan-sonnet"],
    "etymology": "From Italian 'sonetto', meaning 'little song'"
  }
}
```

## File Structure

```
app/
├── poetry/
│   ├── page.tsx                    # Poetry landing page
│   ├── layout.tsx                  # Poetry section layout
│   └── flashcards/
│       ├── page.tsx                # Flashcard selection page
│       ├── poets/
│       │   ├── page.tsx            # Poet flashcards
│       │   └── components/
│       │       ├── PoetCard.tsx
│       │       └── PoetStartScreen.tsx
│       ├── poems/
│       │   ├── page.tsx            # Poem flashcards
│       │   └── components/
│       │       ├── PoemCard.tsx
│       │       └── PoemStartScreen.tsx
│       └── terms/
│           ├── page.tsx            # Poetic term flashcards
│           └── components/
│               ├── TermCard.tsx
│               └── TermStartScreen.tsx

data/
├── poetry/
│   ├── poets.json                  # Poet data
│   ├── poems.json                  # Poem data
│   └── poetic-terms.json           # Poetic term data
```

## UI/UX Design

### Poetry Landing Page
- **Hero Section**: "Explore the World of Poetry"
- **Three Main Categories**:
  1. **Poets** - "Meet the Masters"
  2. **Poems** - "Timeless Verses"
  3. **Poetic Terms** - "The Language of Poetry"
- **Quick Stats**: Total poets, poems, terms available
- **Featured Section**: Highlight of the day/week

### Flashcard Interface Enhancements
- **Category-Specific Styling**: Different color schemes for each type
  - Poets: Purple/Indigo gradient
  - Poems: Green/Teal gradient  
  - Terms: Orange/Red gradient
- **Rich Content Display**: Support for images, longer text, structured data
- **Cross-References**: Links between related cards (poet → their poems)
- **Advanced Filtering**: By period, nationality, movement, etc.

### Navigation Integration
- Add "Poetry" to main navigation
- Update writing exercises page to include poetry section
- Breadcrumb navigation: Writing Exercises → Poetry → [Category]

## Implementation Phases

### Phase 1: Foundation
1. Create poetry section structure
2. Implement basic flashcard components for each type
3. Create sample data files
4. Add navigation integration

### Phase 2: Enhanced Features
1. Cross-referencing between cards
2. Advanced filtering and search
3. Rich content display (images, longer text)
4. Progress tracking per category

### Phase 3: Advanced Features
1. Quiz mode with mixed categories
2. Timeline view for poets
3. Poem analysis tools
4. Export/import functionality

## Technical Considerations

### Data Management
- **Large Datasets**: Poetry data can be extensive; consider pagination
- **Images**: Poet portraits and manuscript images
- **Cross-References**: Maintain referential integrity
- **Search**: Full-text search across all poetry content

### Performance
- **Lazy Loading**: Load flashcard data on demand
- **Caching**: Cache frequently accessed data
- **Optimization**: Compress images and optimize data structure

### Accessibility
- **Screen Readers**: Proper ARIA labels for flashcard interactions
- **Keyboard Navigation**: Full keyboard support
- **High Contrast**: Ensure readability with different color schemes

## Future Enhancements

### Advanced Features
- **Audio**: Recitations of famous poems
- **Interactive Analysis**: Line-by-line poem breakdown
- **Writing Prompts**: Generate poetry based on learned forms
- **Community Features**: User-generated content and discussions

### Educational Tools
- **Poetry Generator**: AI-assisted poetry creation
- **Form Practice**: Interactive sonnet/haiku builders
- **Analysis Tools**: Meter and rhyme scheme detection
- **Timeline**: Historical context and literary movements

## Success Metrics
- **Engagement**: Time spent on poetry flashcards
- **Learning**: Quiz scores and retention rates
- **Usage**: Most popular poets/poems/terms
- **Feedback**: User satisfaction and feature requests

---

This design provides a solid foundation for expanding Wyatt.gg into a comprehensive poetry learning platform while maintaining consistency with the existing writing tools architecture. 