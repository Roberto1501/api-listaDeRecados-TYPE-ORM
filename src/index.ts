import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import "reflect-metadata";
import { DataBase } from "./database/config/database.connection";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//Users

// inicializar o banco de dados, antes do listen
DataBase.connect().then(() => {
  console.log("Database is connected!");
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ` + process.env.PORT);
  });
});
