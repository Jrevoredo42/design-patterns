import Pedido from  './pedido';

interface Cliente {
    nome: string;
    id: number;
    pedidos: Pedido[];
}

class Cliente implements Cliente {
    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }
};

export default Cliente;