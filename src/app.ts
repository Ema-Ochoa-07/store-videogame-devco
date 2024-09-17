import { PostgresDatabase } from "./data";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { envs } from "./config/envs"


(async() => {
    main()
})()

export async function main(){

    const postgres = new PostgresDatabase({
        host: envs.DB_HOST,
        port: envs.DB_PORT,
        username: envs.DB_USERNAME,
        password: envs.DB_PASSWORD,
        database: envs.DB_DATABASE
    })

    await postgres.connect()

    const server = new Server({
        port:3000,
        routes: AppRoutes.routes
    })

await server.start()

}