import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import s from "./word-input.module.css";

export function WordInput(props: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
    return (
        <input
            { ...props }
            className={ classNames(s.wordInput, props.className) }
        />
    );
}
