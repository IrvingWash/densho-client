import { Observer } from "./observer";

export interface IObservable<T> {
    getValue(): T;
    setValue(value: T): void;
    subscribe(observer: Observer<T>): void;
    unsubscribe(observerToRemove: Observer<T>): void;
    unsubscribeAll(): void;
}

export interface IObservableReadonly<T> {
    getValue(): T;
    subscribe(observer: Observer<T>): void;
    unsubscribe(observerToRemove: Observer<T>): void;
    unsubscribeAll(): void;
}
