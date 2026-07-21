/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT,
ALTER COLUMN "cpf" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
