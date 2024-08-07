import { useObservable } from "@utils/observable";
import { IAddEntryViewModel } from "./iadd-entry-view-model";
import { ChangeEvent } from "react";

interface AddEntryViewProps {
    model: IAddEntryViewModel;
}

export function AddEntryView(props: AddEntryViewProps): JSX.Element {
    const kanji = useObservable(props.model.kanji$);
    const kana = useObservable(props.model.kana$);
    const translation = useObservable(props.model.translation$);

    return (
        <form onSubmit={ onSubmit }>
            <input
                value={ kanji ?? "" }
                placeholder="Kanji"
                onChange={ onKanjiInputChange }
            />
            <input
                value={ kana ?? "" }
                placeholder="Kana"
                onChange={ onKanaInputChange }
            />
            <input
                value={ translation }
                placeholder="Translation"
                onChange={ onTranslationInputChange }
            />
            <button type="submit">Add</button>
        </form>
    );

    function onSubmit(event: ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();

        props.model.submit();
    }

    function onKanjiInputChange(event: ChangeEvent<HTMLInputElement>): void {
        props.model.setKanji(event.target.value);
    }

    function onKanaInputChange(event: ChangeEvent<HTMLInputElement>): void {
        props.model.setKana(event.target.value);
    }

    function onTranslationInputChange(event: ChangeEvent<HTMLInputElement>): void {
        props.model.setTranslation(event.target.value);
    }
}
