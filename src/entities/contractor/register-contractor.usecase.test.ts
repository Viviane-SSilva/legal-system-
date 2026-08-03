
import { beforeEach, expect, describe, test } from '@jest/globals';
import { RegisterContractorUseCase } from './register-contractor.usecase.js';
import { RepositoryContractorMemorySafe } from '../../repositories/ContractorRepo.memorysafe.js';

describe('ContractorUseCase', () => {
  let repo: RepositoryContractorMemorySafe;
  let useCase: RegisterContractorUseCase;

  beforeEach(()  => {
    repo = new RepositoryContractorMemorySafe();
    useCase = new RegisterContractorUseCase(repo);
  });

  test('deve registrar um cliente', async () => {
    const dataClient = {
      name: "viviane",
      cpf: "0526662",
      email: "viviane@email.com",
      telefone:"1199999999"
    };

    const clientCreate = await useCase.execute(dataClient);

    expect(clientCreate).not.toBeNull();
    expect(clientCreate?.id).toBe(1);
    expect(clientCreate?.name).toBe("viviane");
  });

  test('O nome deve ser válido', async () => {
    const clientValid = {
      name: "Viviane",
      cpf: "12345678900",
      email: "viviane@email.com"
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



