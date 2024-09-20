import { testServer } from "../../test-server";
import { Videogame } from "../../../src/data"; 
import request from "supertest"; 

jest.mock("../../../src/data", () => {
    return {
        Videogame: {
            findOne: jest.fn(),
            prototype: {
                save: jest.fn(),
            },
        },
    };
});

describe('videogame route tests (PATCH /:id)', () => {

    beforeAll(async () => {
        await testServer.start();
    });

    afterAll(async () => {
        await testServer.close();
    });

    describe('PATCH /api/v1/videogames/:id - Update a videogame', () => {
        test('Should update a videogame partially and return status 200', async () => {
            const mockVideogame = {
                id: 1,
                name: 'Fall Guys',
                console: 'ps4',
                quantity: 6,
                cost: 20000,
                save: jest.fn().mockResolvedValue({
                    id: 1,
                    name: 'Fall Guys',
                    console: 'ps5',
                    quantity: 6,
                    cost: 20000,
                }),
            };

            (Videogame.findOne as jest.Mock).mockResolvedValue(mockVideogame);

            const response = await request(testServer.app)
                .patch('/api/v1/videogames/1')
                .send({ console: 'ps5' })
                .expect(200);

            expect(response.body.console).toBe('ps5');
            expect(response.body).toEqual({
                id: 1,
                name: 'Fall Guys',
                console: 'ps5',
                quantity: 6,
                cost: 20000,
            });

            expect(mockVideogame.save).toHaveBeenCalled();
        });
    });
});
