import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Importa o PrismaClient da pasta customizada gerada
import { PrismaClient } from '../../generated/prisma/index.js';

// 1. Recria as variáveis __filename e __dirname para compatibilidade com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 2. Carrega as variáveis de ambiente antes de ler o DATABASE_URL
if (process.env.NODE_ENV === "test") {
    dotenv.config({
        path: resolve(__dirname, '../../.env.test'),
    });
} else {
    dotenv.config();
}

// 3. Cria a conexão do PostgreSQL
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

// 4. Cria o adaptador do Prisma
const adapter = new PrismaPg(pool);

// 5. Instancia o PrismaClient com o adapter
export const prisma = new PrismaClient({ adapter });