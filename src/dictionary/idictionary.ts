import { DictionaryEntry, DictionaryEntryPayload } from "./dictionary-entry";

export interface IDictionary {
    entries(): readonly DictionaryEntry[];
    addEntry(newEntry: DictionaryEntryPayload): void;
    removeEntry(id: string): void;
    updateEntry(id: string, updatedEntry: DictionaryEntryPayload): void;
}
