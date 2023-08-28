import { DataSource } from "typeorm";
import * as dotenv from "dotenv"

dotenv.config()

const config = new DataSource({
    type: "postgres",
    port: 5432,
    url: process.env.URL,
    
    ssl: {
        rejectUnauthorized:false
    },
    synchronize: false,

    schema:"BancoTrabalhoFinal"
})

export default config