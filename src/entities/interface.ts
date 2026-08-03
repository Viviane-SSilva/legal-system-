export interface IContractor {
    id: number;
    name: string;
    cpf: string;
    email: string;
    phone?: string | null;
}


export interface IContractorRepository {

    create( name: string, cpf: string, email: string, phone?: string): Promise<IContractor>

}