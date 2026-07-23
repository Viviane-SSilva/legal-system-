import { ICliente, IContratanteRepository } from "../entities/interface";

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone?: string | undefined
}


export class RepositorioClienteMemorySafe implements IContratanteRepository {

    clientes;

    constructor() {
        this.clientes = new Map();
    }
    registrarCliente(cliente: Cliente) {
        this.clientes.set(cliente.cpf, cliente);

    }

    async create(
        nome: string, 
        cpf: string, 
        email: string, 
        telefone?: string | undefined
    ): Promise<ICliente> {

        const id = this.clientes.size + 1;

        this.clientes.set(id, { id, nome, cpf, email, telefone })

        const novoCliente: Cliente = this.clientes.get(id);

        return {
            id: novoCliente.id,
            nome: novoCliente.nome,
            cpf: novoCliente.cpf,
            email: novoCliente.email,
            telefone: novoCliente.telefone
        }
    }
}




