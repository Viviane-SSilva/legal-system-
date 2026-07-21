import { Request, Response } from "express";
import { clientRepo } from "../repositories/ClientRepo.memorysafe";
import { ServiceAddClient } from "../repositories/ClientRepo.memorysafe"; // Importando seu serviço

async function addClient(request: Request, response: Response) {
    try {
        const dadosCliente = request.body;

        // O Service processa o cliente usando a instância da memória (clientRepo)
        const clientAdded = ServiceAddClient(dadosCliente, clientRepo);

        return response.status(201).json(clientAdded);
        
    } catch (error: any) {
        return response.status(400).json({ error: error.message });
    }
}

export { addClient };