import Cliente from './models/cliente';

interface Observable {
    subscribe(observer: Cliente): void;
    unsubscribe(observer: Cliente): void;
    notify(): void;
}

interface Observer{
    update(): void;
}

class Observer implements Observer{
    constructor(public readonly id: number){}
    update(): void {
        console.log(`Observer ${this.id} updated`)
    }
}

export default Observer