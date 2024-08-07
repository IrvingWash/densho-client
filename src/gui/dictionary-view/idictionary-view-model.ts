import { IObservable } from "@utils/observable";
import { DictionaryEntry } from "../../dictionary/dictionary-entry";
import { IAddEntryViewModel } from "./add-entry/iadd-entry-view-model";

export interface IDictionaryViewModel {
    entries$: IObservable<readonly DictionaryEntry[]>;
    editMode$: IObservable<boolean>;
    addEntryViewModel(): IAddEntryViewModel;
    toggleEditMode(): void;
}
