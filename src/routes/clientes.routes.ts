import { Router } from "express";

import { addClient } from "../controllers/AddCliente.controller";

const routes = Router();

routes.post("/", addClient);

export default routes;
