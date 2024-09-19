import { testServer } from "../../test-server";
import { PostgresDatabase, User } from "../../../src/data"; // Mockearemos User también
import { envs } from "../../../src/config/envs";
import request from "supertest";
// import { Router } from 'express';
// import { UsersRoutes } from '../../../src/presentation/users/router';
// Mock de PostgresDatabase y User
jest.mock("../../../src/data", () => {
    return {
        PostgresDatabase: jest.fn().mockImplementation(() => {
            return {
                connect: jest.fn().mockResolvedValue(true),
            };
        }),
        User: jest.fn().mockImplementation(function () {
            // Mock de User con el método save
            return {
                save: jest.fn().mockResolvedValue({
                    id: 1,
                    name: 'UserP',
                    lastname: 'Prueba'
                })
            };
        })
    };
});

describe('User testing routes', () => {

    let db: PostgresDatabase;

    beforeAll(async () => {
        db = new PostgresDatabase({
            host: envs.DB_HOST,
            port: envs.DB_PORT,
            username: envs.DB_USERNAME,
            password: envs.DB_PASSWORD,
            database: envs.DB_DATABASE
        });
        await db.connect();
    });

    describe('Create User Testing', () => {

        test('Should create a user and send status 200', async () => {

            // 1) Crear un objeto con la información del usuario
            const user = {
                name: 'UserP',
                lastname: 'Prueba'
            };

            // 2) Hacer la petición con supertest
            const response = await request(testServer.app)
                .post('/api/v1/users')
                .send(user)
                .expect(200);

            // 3) Verificar que el cuerpo de la respuesta contenga el usuario creado
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe(user.name);
            expect(response.body.lastname).toBe(user.lastname);

            // Verificar que se llamó al método save del modelo User
            const userInstance = new User(); // Se crea la instancia usando `new`
            expect(userInstance.save).toHaveBeenCalled();  // Verificamos que el mock del método save fue llamado
        });
    });
});
