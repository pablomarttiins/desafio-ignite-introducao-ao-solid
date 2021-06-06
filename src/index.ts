import express from "express";
import sweggerUI from 'swagger-ui-express';

import { usersRoutes } from "./routes/users.routes";

import swaggerFile from '../swagger.json';

const app = express();


app.use(express.json());

app.use("/users", usersRoutes);

app.use('/api-docs',sweggerUI.serve, sweggerUI.setup(swaggerFile));

export { app };
