import { IContractorRepository } from "../interface.js";


interface RegisterContractorRequest {
      name: string,
      cpf: string,
      email: string,
      phone?: string
}

interface RegisterContractorResponse {
    id: number,
    name: string,
    cpf: string,
    email: string,
    phone?: string | null
}

export class RegisterContractorUseCase {

	constructor(private registerContractor: IContractorRepository ) { }

	async execute({
        name,
        cpf,
        email,
        phone
	
	}: RegisterContractorRequest): Promise<RegisterContractorResponse | null> {

    if (!name  || !cpf || !email){
        return null
    }

	const response = await this.registerContractor.create( 
        name, 
        cpf, 
        email, 
        phone);
		
    return {
			id: response.id,
            name: response.name,
            cpf: response.cpf,
            email: response.email,
            phone: response.phone ?? null
		};
	}

}