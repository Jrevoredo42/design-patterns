import Cliente from '../models/cliente';
import Observer from './observer';


interface Observable {
    subscribe(observer: Cliente): void;
    unsubscribe(observer: Cliente): void;
    notify(): void;
}

class Observable implements Observable {
    private observers: Observer[] = [];

    subscribe(observer: Cliente): void {
        this.observers.push(observer);

}

export default Observable