import { IObservable, Observable } from "@utils/observable";
import { DictionaryEntry, DictionaryEntryPayload } from "../../dictionary/dictionary-entry";
import { IDictionary } from "../../dictionary/idictionary";
import { IDictionaryViewModel } from "./idictionary-view-model";
import { IAddEntryViewModel } from "./add-entry/iadd-entry-view-model";
import { AddEntryViewModel } from "./add-entry/add-entry-view-model";

export class DictionaryViewModel implements IDictionaryViewModel {
    public entries$: IObservable<readonly DictionaryEntry[]>;
    public editMode$: IObservable<boolean>;

    private readonly _dictionary: IDictionary;

    public constructor(dictionary: IDictionary) {
        this._dictionary = dictionary;

        this.entries$ = new Observable(this._dictionary.entries());
        this.editMode$ = new Observable(false);
    }

    public addEntryViewModel(): IAddEntryViewModel {
        return new AddEntryViewModel(this._addEntry);
    }

    public toggleEditMode(): void {
        this.editMode$.setValue(!this.editMode$.getValue());
    }

    private _addEntry = (entry: DictionaryEntryPayload): void => {
        this._dictionary.addEntry(entry);

        this.entries$.setValue(this._dictionary.entries());

        this.editMode$.setValue(false);
    };
}
