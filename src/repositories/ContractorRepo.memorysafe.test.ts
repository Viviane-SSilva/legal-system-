
import { beforeEach, expect, describe, test } from '@jest/globals';
import { RepositoryContractorMemorySafe } from './ContractorRepo.memorysafe.js';

describe('ClientRepo Memory Safe', () => {

  let repo: RepositoryContractorMemorySafe;
 
  beforeEach(() => {
     repo = new RepositoryContractorMemorySafe();
  });

  test('deve registrar um cliente com sucesso e retornar o ID',async () => {
    const novoCliente = await repo.create(
      "Viviane",
      "12345678900",
      "viviane@email.com",
      "119999999"
    );

    expect(novoCliente).toHaveProperty("id");
    expect(novoCliente.id).toBe(1);
    expect(novoCliente.name).toBe("Viviane");
    expect(novoCliente.cpf).toBe("12345678900");
  });

  test('Deve incrementar o ID a cada novo cliente cadastrado', async () => {
    const cliente1 = await repo.create("Cliente Um", "1111111111", "c1@email.com");
    const cliente2 = await repo.create("Cliente Dois", "22222222", "c2@email.com");

    expect(cliente1.id).toBe(1);
    expect(cliente2.id).toBe(2);
  })
});