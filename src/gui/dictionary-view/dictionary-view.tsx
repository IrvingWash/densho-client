import classNames from "classnames";
import { useObservable } from "@utils/observable";
import { ControlButton } from "@ui-kit/components/control-button/control-button";
import { IDictionaryViewModel } from "./idictionary-view-model";
import { AddEntryView } from "./add-entry/add-entry-view";
import s from "./dictionary-view.module.css";

interface DictionaryViewProps {
    model: IDictionaryViewModel;
}

export function DictionaryView(props: DictionaryViewProps): JSX.Element {
    const editMode = useObservable(props.model.editMode$);
    const entries = useObservable(props.model.entries$);

    return (
        <div className={ s.container }>
            <div className={ s.title }>辞書</div>
            <div className={ s.entries}>
                { renderEntries() }
            </div>
            <ControlButton className={ s.editButton } onClick={ onAddClick }>
                { editMode ? "Cancel" : "Add" }
            </ControlButton>
            { editMode &&
                <AddEntryView model={ props.model.addEntryViewModel() } />
            }
        </div>
    );

    function onAddClick(): void {
        props.model.toggleEditMode();
    }

    function renderEntries(): JSX.Element[] {
        return entries.map((entry) => {
            return (
                <div className={ s.entry }>
                    <div className={ classNames(s.entryLine, s.entryHeading) }>
                        <span>Kanji:</span>
                        <span>Kana:</span>
                        <span>Translation:</span>
                    </div>
                    <div className={ s.entryLine }>
                        <span className={ s.japanese }>{entry.kanji}</span>
                        <span className={ s.japanese }>{entry.kana}</span>
                        <span>{entry.translation}</span>
                    </div>
                </div>
            );
        });
    }
}
