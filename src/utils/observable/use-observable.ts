import { useEffect, useState } from "react";
import { IObservable } from "./observable-interfaces";

export function useObservable<T>(observable: IObservable<T>): T {
    const [value, setValue] = useState(observable.getValue());

    useEffect(
        () => {
            observable.subscribe(setValue);

            return (): void => observable.unsubscribe(setValue);
        },
        [observable, setValue],
    );

    return value;
}
