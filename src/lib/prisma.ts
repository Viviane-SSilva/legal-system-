import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { resolve, dirname } from 'path';
import dotenv from 'dotenv';


// Note que agora o import aponta para a pasta customizada que o Prisma gerou:
import { PrismaClient } from '../../generated/prisma';

// 1. Cria a conexão do PostgreSQL


if (process.env.NODE_ENV === "test") {
    dotenv.config({
        path: resolve(__dirname, '..', '.env.test'),
    });
}

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
// 2. Cria o adaptador do Prisma
const adapter = new PrismaPg(pool);

// 3. Instancia o PrismaClient passando o adapter
export const prisma = new PrismaClient({ adapter });