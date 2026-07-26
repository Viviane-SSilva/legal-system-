import { IContratanteRepository } from "../interface";


interface RegisterContratanteRequest {
      nome: string,
      cpf: string,
      email: string,
      telefone?: string
}

interface RegisterContratanteResponse {
    id: number,
    name: string,
    cpf: string,
    email: string,
    telefone?: string | undefined
}

export class RegisterContratanteUseCase {

	constructor(private registerContratante: IContratanteRepository ) { }

	async execute({
        nome,
        cpf,
        email,
        telefone
	
	}: RegisterContratanteRequest): Promise<RegisterContratanteResponse | null> {

    if (!nome  || !cpf || !email){
        return null
    }

	const response = await this.registerContratante.create( 
        nome, 
        cpf, 
        email, 
        telefone);
		
    return {
			id: response.id,
            name: response.name,
            cpf: response.cpf,
            email: response.email,
            telefone: response.telefone
		};
	}

}