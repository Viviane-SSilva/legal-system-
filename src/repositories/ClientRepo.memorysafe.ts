import { ICliente, IContratanteRepository } from "../entities/interface";

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
}


export class RepositorioClienteMemorySafe implements IContratanteRepository {

    clientes;

    constructor() {
        this.clientes = new Map();
    }
    registrarCliente(cliente: Cliente) {
        this.clientes.set(cliente.cpf, cliente);

    }

    async create(id: number, nome: string, cpf: string): Promise<ICliente> {

        this.clientes.set(id, { nome, cpf})

        const response: Cliente = this.clientes.get(id);

        return{
            id,
            nome: response.nome,
            cpf: response.cpf
        }
    }
}




