import { IObservable, Observable } from "@utils/observable";
import { IAddEntryViewModel } from "./iadd-entry-view-model";
import { DictionaryEntryPayload } from "../../../dictionary/dictionary-entry";

type Submitter = (entry: DictionaryEntryPayload) => void;

export class AddEntryViewModel implements IAddEntryViewModel {
    public kanji$: IObservable<string | null>;
    public kana$: IObservable<string | null>;
    public translation$: IObservable<string>;

    private readonly _submitter: Submitter;

    public constructor(submitter: Submitter) {
        this.kanji$ = new Observable(null);
        this.kana$ = new Observable(null);
        this.translation$ = new Observable("");

        this._submitter = submitter;
    }

    public setKanji(value: string | null): void {
        this.kanji$.setValue(value);
    }

    public setKana(value: string | null): void {
        this.kana$.setValue(value);
    }

    public setTranslation(value: string): void {
        this.translation$.setValue(value);
    }

    public submit(): void {
        this._submitter({
            kanji: this.kanji$.getValue(),
            kana: this.kana$.getValue(),
            translation: this.translation$.getValue(),
        });
    }
}
