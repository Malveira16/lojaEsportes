import "reflect-metadata"
import { DataSource } from "typeorm"
import { Produto } from "./entity/Produto"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "lojaCentauro",
    synchronize: true,
    logging: false,
    entities: [Produto],
    migrations: [],
    subscribers: [],
})
