export interface ICliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone?: string | undefined;
}


export interface IContratanteRepository {

    create( nome: string, cpf: string, email: string, telefone?: string): Promise<ICliente>

}