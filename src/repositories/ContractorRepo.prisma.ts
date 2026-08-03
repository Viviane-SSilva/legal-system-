import { IContractor, IContractorRepository } from "../entities/interface.js";
import { prisma } from "../lib/prisma.js";



export class RepositoryContractorPrisma implements IContractorRepository {

   async create( name: string, cpf: string, email: string, phone?: string | null){

    const contractor: IContractor = await prisma.contractor.create({
        data: { cpf, email, name, phone: phone ?? null },
      });

      console.log(contractor)

      return contractor;


   }

}

