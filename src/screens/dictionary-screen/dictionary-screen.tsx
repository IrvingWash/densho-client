import { Hardware } from "../../hardware/hardware";
import s from "./dictionary-screen.module.css";

export function DictionaryScreen(): JSX.Element {
    return (
        <div className={ s.container }>
            <Hardware />
        </div>
    );
}
