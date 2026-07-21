export interface ICliente {
    id: number;
    nome: string;
    cpf: string;
}


export interface IContratanteRepository {

    create(id: number, nome: string, cpf: string): Promise<ICliente>

}