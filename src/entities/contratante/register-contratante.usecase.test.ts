
import { beforeEach, expect, describe, test } from '@jest/globals';
import { RegisterContratanteUseCase } from './register-contratante.usecase';
import { RepositorioClienteMemorySafe } from '../../repositories/ClientRepo.memorysafe';
import { ICliente } from '../interface';

describe('ContratanteUseCase', () => {
 
  beforeEach(() => {
    //repo = new CarrinhoRepo();
  });

  test('deve registrar um cliente', async () => {

    const Repo = new RepositorioClienteMemorySafe();

    const UseCase = new RegisterContratanteUseCase(Repo);

    const Cliente: ICliente = { 
        id: 1,
        nome: "viviane",
        cpf: "0526662"
    }

    const idCliente = await UseCase.execute(Cliente);

    
    expect(1).toBe(idCliente?.id);

  });

  test('O nome deve ser válido', async () => {

    const Repo = new RepositorioClienteMemorySafe();

    const UseCase = new RegisterContratanteUseCase(Repo);

    const Cliente: ICliente = { 
        id: 1,
        nome: "Viviane",
        cpf: ""
    }

     const ClienteInvalido: ICliente = { 
        id: 1,
        nome: "",
        cpf: ""
    }

    const idCliente = await UseCase.execute(Cliente);

    const NomeClienteInvalido = await UseCase.execute(ClienteInvalido);

    
    expect("Viviane").toBe(idCliente?.nome);
    expect(NomeClienteInvalido).toBeNull();
    

  });



});