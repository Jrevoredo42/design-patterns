
interface Observer{
    nome: string;
    id: number;
    pedidos: Pedido[];
    update(): void;
}

class Observer implements Observer{
    constructor(public readonly id: number){}
    update(): void {
        console.log(`Observer ${this.id} updated`)
    }
}


export default Observer