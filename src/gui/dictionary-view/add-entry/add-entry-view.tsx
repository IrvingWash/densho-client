import { ChangeEvent } from "react";
import { useObservable } from "@utils/observable";
import { ControlButton } from "@ui-kit/components/control-button/control-button";
import { IAddEntryViewModel } from "./iadd-entry-view-model";
import s from "./add-entry-view.module.css";
import { WordInput } from "@ui-kit/components/word-input/word-input";

interface AddEntryViewProps {
    model: IAddEntryViewModel;
}

export function AddEntryView(props: AddEntryViewProps): JSX.Element {
    const kanji = useObservable(props.model.kanji$);
    const kana = useObservable(props.model.kana$);
    const translation = useObservable(props.model.translation$);

    return (
        <form className={ s.container } onSubmit={ onSubmit }>
            <WordInput
                value={ kanji ?? "" }
                placeholder="Kanji"
                onChange={ onKanjiInputChange }
                autoFocus
            />
            <WordInput
                value={ kana ?? "" }
                placeholder="Kana"
                onChange={ onKanaInputChange }
            />
            <WordInput
                value={ translation }
                placeholder="Translation"
                onChange={ onTranslationInputChange }
            />
            <ControlButton type="submit">Submit</ControlButton>
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
