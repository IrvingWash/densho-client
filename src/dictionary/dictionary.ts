import { v4 as uuid } from "uuid";
import { DictionaryEntry, DictionaryEntryPayload } from "./dictionary-entry";
import { IDictionary } from "./idictionary";

export class Dictionary implements IDictionary {
    private _entries: DictionaryEntry[];

    public constructor(entries: DictionaryEntry[]) {
        this._entries = [...entries];
    }

    public entries(): readonly DictionaryEntry[] {
        return this._entries;
    }

    public addEntry(newEntry: DictionaryEntryPayload): void {
        this._entries.push({
            ...newEntry,
            id: uuid(),
            createdAt: Date.now(),
        });
    }

    public removeEntry(id: string): void {
        this._entries = this._entries.filter(
            (entry) => entry.id !== id,
        );
    }

    public updateEntry(id: string, updatedEntry: DictionaryEntryPayload): void {
        const entryToUpdateId = this._entries.findIndex((entry) => entry.id === id);

        if (entryToUpdateId === undefined) {
            return;
        }

        this._entries[entryToUpdateId] = {
            ...this._entries[entryToUpdateId],
            ...updatedEntry,
        };
    }
}
