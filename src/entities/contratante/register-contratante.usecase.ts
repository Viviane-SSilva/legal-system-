import { IContratanteRepository } from "../interface";


interface RegisterContratanteRequest {
      nome: string,
      cpf: string
}

interface RegisterContratanteResponse {
    id: number,
    nome: string,
    cpf: string
}

export class RegisterContratanteUseCase {

	constructor(private registerContratante: IContratanteRepository ) { }

	async execute({
        nome,
        cpf
	
	}: RegisterContratanteRequest): Promise<RegisterContratanteResponse | null> {

    if (nome === undefined || nome == null || nome == ""){
        return null
    }

	const response = await this.registerContratante.create(id, nome, cpf);
		
    return {
			id: response.id,
            nome: response.nome,
            cpf: response.cpf
		};
	}

}