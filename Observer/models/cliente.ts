import Pedido from  './pedido';

interface Cliente {
    
}

class Cliente implements Cliente {
    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }
};

export default Cliente;