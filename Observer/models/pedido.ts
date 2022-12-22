interface Pedido {
    nome: string;
    status: string;
    idCliente: number;
}

class Pedido implements Pedido{
    constructor(nome: string, status: string, idCliente: number){
        this.nome = nome;
        this.status = status;
        this.idCliente = idCliente;
        
    }
}

export default Pedido