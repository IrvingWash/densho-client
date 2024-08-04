import { IObservable, IObservableReadonly } from "./observable-interfaces";
import { Observer } from "./observer";

export class Observable<T> implements IObservable<T> {
    private _value: T;
    private _observers: Observer<T>[] = [];

    public constructor(initialValue: T) {
        this._value = initialValue;
    }

    public asReadonly(): IObservableReadonly<T> {
        return this;
    }

    public getValue(): T {
        return this._value;
    }

    public setValue(value: T): void {
        this._value = value;

        this._notify();
    }

    public subscribe(observer: Observer<T>): void {
        this._observers.push(observer);
    }

    public unsubscribe(observerToRemove: Observer<T>): void {
        this._observers = this._observers.filter(
            (observer) => observer !== observerToRemove,
        );
    }

    public unsubscribeAll(): void {
        this._observers = [];
    }

    private _notify(): void {
        for (const observer of this._observers) {
            observer(this._value);
        }
    }
}
