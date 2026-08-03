
import { beforeEach, expect, describe, test } from '@jest/globals';
import { RepositoryContractorPrisma } from '../../../repositories/ContractorRepo.prisma.js';
import { RegisterContractorUseCase } from '../../../entities/contractor/register-contractor.usecase.js';
import { prisma } from '../../../lib/prisma.js';

describe('ContractorUseCase', () => {
  let repo: RepositoryContractorPrisma;
  let useCase: RegisterContractorUseCase;

  beforeEach( async ()  => {

    await prisma.contractor.deleteMany();
    repo = new RepositoryContractorPrisma();
    useCase = new RegisterContractorUseCase(repo);
  });

  test('deve registrar um cliente', async () => {

    const sufixo = Date.now();

    const dataClient = {
      name: "viviane",
      cpf: `${sufixo}`.slice(-11),
      email: "kleysonpeste@email.com",
      phone:"1199999999"
    };

    const clientCreated = await useCase.execute(dataClient);

    expect(clientCreated).not.toBeNull();
    expect(clientCreated?.id).toBeDefined();
    expect(clientCreated?.name).toBe("viviane");
  });

  test.skip('O nome deve ser válido', async () => {
    const clientValid = {
      name: "Viviane",
      cpf: "12345678900",
      email: "kleyson@email.com"
    };

    const clientInvalid = {
      name:"",
      cpf: "12345678900",
      email: "invalido@email.com"
    };

    const resultValid = await useCase.execute(clientValid);
    const resultInvalid = await useCase.execute(clientInvalid);

    expect(resultValid?.name).toBe("Viviane");
    expect(resultInvalid).toBeNull();
  });
});



