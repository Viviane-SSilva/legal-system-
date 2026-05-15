/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cliente";

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
