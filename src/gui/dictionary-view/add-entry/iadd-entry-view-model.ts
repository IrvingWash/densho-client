import { IObservable } from "@utils/observable";

export interface IAddEntryViewModel {
    kanji$: IObservable<string | null>;
    kana$: IObservable<string | null>;
    translation$: IObservable<string>;

    setKanji(value: string | null): void;
    setKana(value: string | null): void;
    setTranslation(value: string): void;
    submit(): void;
}
