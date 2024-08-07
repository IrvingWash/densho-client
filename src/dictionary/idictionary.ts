import { DictionaryEntry } from "./dictionary-entry";

export interface IDictionary {
    entries(): readonly DictionaryEntry[];
    addEntry(newEntry: DictionaryEntry): void;
    removeEntry(entryToRemove: DictionaryEntry): void;
    updateEntry(updatedEntry: DictionaryEntry): void;
}
