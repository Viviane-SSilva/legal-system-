
import { beforeEach, expect, describe, test } from '@jest/globals';
import { RepositorioClientePrisma } from '../../../repositories/clientRepo.prisma.js';
import { RegisterContratanteUseCase } from '../../../entities/contratante/register-contratante.usecase.js';
import { prisma } from '../../../lib/prisma.js';

describe('ContratanteUseCase', () => {
  let repo: RepositorioClientePrisma;
  let useCase: RegisterContratanteUseCase;

  beforeEach( async ()  => {

    await prisma.cliente.deleteMany();
    repo = new RepositorioClientePrisma();
    useCase = new RegisterContratanteUseCase(repo);
  });

  test('deve registrar um cliente', async () => {

    const sufixo = Date.now();

    const dadosCliente = {
      nome: "viviane",
      cpf: `${sufixo}`.slice(-11),
      email: "kleysonpeste@email.com",
      telefone:"1199999999"
    };

    const clienteCriado = await useCase.execute(dadosCliente);

    expect(clienteCriado).not.toBeNull();
    expect(clienteCriado?.id).toBeDefined();
    expect(clienteCriado?.name).toBe("viviane");
  });

  test.skip('O nome deve ser válido', async () => {
    const clienteValido = {
      nome: "Viviane",
      cpf: "12345678900",
      email: "kleyson@email.com"
    };

    const clienteInvalido = {
      nome:"",
      cpf: "12345678900",
      email: "invalido@email.com"
    };

    const resultadoValido = await useCase.execute(clienteValido);
    const resultadoInvalido = await useCase.execute(clienteInvalido);

    expect(resultadoValido?.name).toBe("Viviane");
    expect(resultadoInvalido).toBeNull();
  });
});



