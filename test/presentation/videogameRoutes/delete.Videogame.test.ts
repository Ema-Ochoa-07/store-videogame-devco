import { testServer } from "../../test-server";
import { Videogame } from "../../../src/data"; 
import request from "supertest"; 

jest.mock("../../../src/data", () => {
    return {
        Videogame: {
            findOne: jest.fn(),
            prototype: {
                remove: jest.fn().mockResolvedValue({
                    message: "Videojuego eliminado exitosamente",
                }),
            },
        },
    };
});

describe('videogame route tests (DELETE /:id)', () => {

    beforeAll(async () => {
        await testServer.start();
    });

    afterAll(async () => {
        await testServer.close();
    });

    describe('DELETE /api/v1/videogames/:id - Delete a videogame', () => {
        test('Should delete a videogame and return status 200', async () => {
            const mockVideogame = {
                id: 1,
                name: 'Fall Guys',
                console: 'ps4',
                quantity: 6,
                cost: 20000,
                remove: jest.fn().mockResolvedValue({
                    message: "Videojuego eliminado exitosamente",
                }),
            };

            (Videogame.findOne as jest.Mock).mockResolvedValue(mockVideogame);

            const response = await request(testServer.app)
                .delete('/api/v1/videogames/1')
                .expect(200);

            expect(response.body.message).toBe("Videojuego eliminado exitosamente");
            expect(mockVideogame.remove).toHaveBeenCalled();
        });
    });
});
