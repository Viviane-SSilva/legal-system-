import { IContractor, IContractorRepository } from "../entities/interface.js";

interface Contractor {
    id: number;
    name: string;
    cpf: string;
    email: string;
    phone?: string | null
}


export class RepositoryContractorMemorySafe implements IContractorRepository {

    contractors;

    constructor() {
        this.contractors = new Map();
    }
    registerContractor(contractor: Contractor) {
        this.contractors.set(contractor.cpf, contractor);
    }

    async create(
        name: string, 
        cpf: string, 
        email: string, 
        phone?: string | undefined
    ): Promise<IContractor> {

        const id = this.contractors.size + 1;

        this.contractors.set(id, { id, name, cpf, email, phone })

        const newContractor: Contractor = this.contractors.get(id);

        return {
            id: newContractor.id,
            name: newContractor.name,
            cpf: newContractor.cpf,
            email: newContractor.email,
            phone: newContractor.phone ?? null
        }
    }
}




