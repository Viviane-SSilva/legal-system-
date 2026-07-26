import { ICliente, IContratanteRepository } from "../entities/interface.js";
import { prisma } from "../lib/prisma.ts";



export class RepositorioClientePrisma implements IContratanteRepository {

   async create( nome: string, cpf: string, email: string, telefone?: string){

    const cliente: ICliente = await prisma.cliente.create({
        data: { cpf, email, name:nome, telefone },
      });

      console.log(cliente)

      return cliente;


   }

}

