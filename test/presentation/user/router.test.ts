import { testServer } from "../../test-server";
import { PostgresDatabase, User } from "../../../src/data";
import { envs } from "../../../src/config/envs";
import request from "supertest";

describe('User testing routes', () => {

    let db: PostgresDatabase;

    beforeAll(async () => {
        try {
            db = new PostgresDatabase({
                host: envs.DB_HOST,
                port: envs.DB_PORT,
                username: envs.DB_USERNAME,
                password: envs.DB_PASSWORD,
                database: envs.DB_DATABASE
            })
            await db.connect(); // Intentar conectar a la base de datos
        } catch (error) {
            console.error("Error connecting to the database", error);
            throw error; // Esto hará que el test falle si no se conecta correctamente
        }
    })

})

describe('Create User Testing', () => {

    test('Should create a user and send status 200', async () => {

        // 1) Crear un objeto con la información del usuario
        const user = {
            name: 'UserP',
            lastname: 'Prueba'
        }

        // 2) Hacer la petición con supertest
        const response = await request(testServer.app)
            .post('/api/v1/users')
            .send(user)
            .expect(200);

        // 3) Verificar que el cuerpo de la respuesta contenga el usuario creado
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(user.name);
        expect(response.body.lastname).toBe(user.lastname);
    });
});
