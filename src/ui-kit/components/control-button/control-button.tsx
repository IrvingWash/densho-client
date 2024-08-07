import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import s from "./control-button.module.css";

export function ControlButton(props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <button
            { ...props }
            className={ classNames(s.controlButton, props.className)}
        >
            { props.children }
        </button>
    );
}
