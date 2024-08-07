export interface DictionaryEntry {
    kanji: string | null;
    hiragana: string | null;
    translation: string;
}

export function isSameDictionaryEntry(a: DictionaryEntry, b: DictionaryEntry): boolean {
    return a.kanji === b.kanji
        && a.hiragana === b.hiragana
        && a.translation === b.translation;
}
