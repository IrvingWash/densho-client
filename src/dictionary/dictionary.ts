import { DictionaryEntry, isSameDictionaryEntry } from "./dictionary-entry";
import { IDictionary } from "./idictionary";

export class Dictionary implements IDictionary {
    private _entries: DictionaryEntry[];

    public constructor(entries: DictionaryEntry[]) {
        this._entries = [...entries];
    }

    public entries(): readonly DictionaryEntry[] {
        return this._entries;
    }

    public addEntry(newEntry: DictionaryEntry): void {
        this._entries.push({ ...newEntry });
    }

    public removeEntry(entryToRemove: DictionaryEntry): void {
        this._entries = this._entries.filter(
            (entry) => !isSameDictionaryEntry(entry, entryToRemove),
        );
    }
}
