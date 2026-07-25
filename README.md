```markdown
⚖️ Legal System - MVP

O Legal System é uma solução desenvolvida para escritórios de advocacia gerenciarem clientes e honorários de forma eficiente,
escalável e segura. O projeto foi construído utilizando os princípios de
Clean Architecture,
SOLID e desenvolvimento guiado por testes (TDD/Unit Testing).

🚀 Tecnologias, Ferramentas e Bibliotecas

🧰 Linguagem & Ambiente de Execução
Node.js: Ambiente de execução para o código JavaScript/TypeScript no servidor.
TypeScript: Superset de JavaScript com tipagem estática e verificação rigorosa de erros em tempo de compilação.

💾 Banco de Dados & ORM
PostgreSQL: Banco de dados relacional robusto para armazenamento de entidades do sistema.
Prisma ORM: ORM para modelagem de dados, geração automatizada de migrations e manipulação do banco de dados tipada de forma nativa.
Docker & Docker Compose: Containerização do ambiente de banco de dados para rápida inicialização e consistência no desenvolvimento.

🧪 Testes Automatizados
Jest: Framework de testes em JavaScript para execução de suítes de testes unitários e de integração.
ts-jest: Pré-processador Jest para execução direta de testes em TypeScript.

🌐 API & Servidor (Em Progresso)
Express.js: Framework minimalista para gerenciamento de rotas e requisições HTTP RESTful.


🏛️ Arquitetura e Boas Práticas

O projeto é estruturado seguindo os princípios da **Clean Architecture**, garantindo que as regras de negócio fiquem isoladas de bibliotecas e frameworks externos:

src/
├── entities/           # Interfaces, tipos e contratos do domínio
├── use-cases/          # Regras de negócio da aplicação (RegisterContratanteUseCase)
├── repositories/       # Abstrações e implementações de acesso a dados
│   ├── in-memory/      # Repositórios em memória para testes (MemorySafe)
│   └── prisma/         # Implementações reais com Prisma ORM
└── database/           # Configuração e inicialização do cliente do banco


💡 Destaques de Código:

Inversão de Dependência: Uso de interfaces ( IContratanteRepository) para desacoplar a camada de negócio de persistência de dados.

TypeScript Strict: Tipagem rigorosa com suporte a opções como exactOptionalPropertyTypespara garantia de integridade de dados específicos.

Repositórios MemorySafe: Mocks em memória utilizando Map()JavaScript para isolamento de testes e desempenho sem necessidade de I/O em banco de dados reais.

🧪 Suíte de Testes Automatizados
O sistema conta com cobertura de testes automatizados para validar todas as regras do Use Case e comportamentos do repositório.

Para rodar os testes da aplicação:

```
Bash
# Executa todos os testes unitários e de integração
npm test

# Executa os testes em modo de observação (watch mode)
npm run test:watch
```

🚦 Como Executar o Projeto Localmente
1. Pré-requisitos

Node.js (v18 ou superior)
Docker e Docker Compose instalados

```
2. Passo a Passo
Bash

# Clone o repositório
git clone [https://github.com/seu-usuario/legal-system.git](https://github.com/seu-usuario/legal-system.git)

# Acesse a pasta do projeto
cd legal-system

# Instale as dependências
npm install

# Suba o container do PostgreSQL via Docker
docker-compose up -d

# Execute as migrations do Prisma
npx prisma migrate dev

# Execute a suíte de testes
npm test
```

📌 Status do Projeto
[x] Modelagem da Entidade de Clientes/Contratantes

[x] Repositório de Clientes em Memória ( RepositorioClienteMemorySafe)

[x] Caso de Uso: Cadastro de Contratante ( RegisterContratanteUseCase)

[x] Suíte de Testes Unitários com Jest

[ ] Implementação do Repositório Prisma Real ( PrismaClienteRepository)

[ ] Rotas e Controladores HTTP com Express ( POST /clientes)

[ ] Módulo de Honorários / Cobranças

Desenvolvido por Viviane 🚀
