import { DictionaryEntry } from "./dictionary-entry";

export class Dictionary {
    private _entries: DictionaryEntry[] = [];

    public entries(): readonly DictionaryEntry[] {
        return this._entries;
    }

    public addEntry(newEntry: DictionaryEntry): void {
        this._entries.push({ ...newEntry });
    }

    public removeEntry(entryToRemove: DictionaryEntry): void {
        this._entries = this._entries.filter(
            (entry) => entryToRemove.id !== entry.id,
        );
    }

    public updateEntry(updatedEntry: DictionaryEntry): void {
        const entryToUpdateId = this._entries.findIndex(
            (entry) => entry.id === updatedEntry.id,
        );

        if (entryToUpdateId === -1) {
            return;
        }

        this._entries[entryToUpdateId] = { ...updatedEntry };
    }
}
