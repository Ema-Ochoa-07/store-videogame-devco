import { testServer } from "../../test-server"; 
import { User } from "../../../src/data"; 
import request from "supertest"; 

jest.mock("../../../src/data", () => {
    return {
        User: {
            find: jest.fn(), 
        },
    };
});

describe('User route tests (GET /)', () => {

    beforeAll(async () => {
        await testServer.start();
    });

    afterAll(async () => {
        await testServer.close();
    });

    describe('GET /api/v1/users - Find all users', () => {
        test('Should return a list of users with status 200', async () => {
            const mockUsers = [
                {
                    id: 1,
                    name: 'UserP',
                    lastname: 'Prueba',
                    videogames: [{ name: 'Zelda' }],
                },
                {
                    id: 2,
                    name: 'UserQ',
                    lastname: 'Prueba2',
                    videogames: [{ name: 'Mario' }],
                },
            ];

            (User.find as jest.Mock).mockResolvedValue(mockUsers);

            const response = await request(testServer.app)
                .get('/api/v1/users')
                .expect(200);

            expect(response.body).toEqual(mockUsers);
            expect(response.body[0].videogames[0].name).toBe('Zelda');
            expect(response.body[1].videogames[0].name).toBe('Mario');
        });

    });
});
