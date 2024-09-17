import { before, describe } from "node:test";
import { testServer } from "../../test-server";
import { PostgresDatabase } from "../../../src/data";
import { envs } from "../../../src/config/envs";


describe('Videogames testing routes'),() => {

    before(async() =>{
        
        await testServer.start()
        await new PostgresDatabase({
            host: envs.DB_HOST,
            port: envs.PORT,
            username: envs.DB_USERNAME,
            password: envs.DB_PASSWORD,
            database: envs.DB_DATABASE,
        }).connect()
    })
}