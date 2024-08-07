interface DictionaryEntryBase {
    kanji: string | null;
    kana: string | null;
    translation: string;
}

export interface DictionaryEntry extends DictionaryEntryBase {
    id: string;
    createdAt: number;
}

export interface DictionaryEntryPayload extends DictionaryEntryBase {}
