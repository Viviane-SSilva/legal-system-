
import { beforeEach, expect, describe, test } from '@jest/globals';
import { RegisterContratanteUseCase } from './register-contratante.usecase';
import { RepositorioClienteMemorySafe } from '../../repositories/ClientRepo.memorysafe';

describe('ContratanteUseCase', () => {
  let repo: RepositorioClienteMemorySafe;
  let useCase: RegisterContratanteUseCase;

  beforeEach(()  => {
    repo = new RepositorioClienteMemorySafe();
    useCase = new RegisterContratanteUseCase(repo);
  });

  test('deve registrar um cliente', async () => {
    const dadosCliente = {
      nome: "viviane",
      cpf: "0526662",
      email: "viviane@email.com",
      telefone:"1199999999"
    };

    const clienteCriado = await useCase.execute(dadosCliente);

    expect(clienteCriado).not.toBeNull();
    expect(clienteCriado?.id).toBe(1);
    expect(clienteCriado?.nome).toBe("viviane");
  });

  test('O nome deve ser válido', async () => {
    const clienteValido = {
      nome: "Viviane",
      cpf: "12345678900",
      email: "viviane@email.com"
    };

    const clienteInvalido = {
      nome:"",
      cpf: "12345678900",
      email: "invalido@email.com"
    };

    const resultadoValido = await useCase.execute(clienteValido);
    const resultadoInvalido = await useCase.execute(clienteInvalido);

    expect(resultadoValido?.nome).toBe("Viviane");
    expect(resultadoInvalido).toBeNull();
  });
});



