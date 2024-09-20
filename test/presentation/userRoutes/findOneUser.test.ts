import { testServer } from "../../test-server";
import { User } from "../../../src/data";
import request from "supertest";
jest.mock("../../../src/data", () => {
    return {
        User: {
            findOne: jest.fn(),
        },
    };
});
describe('User route tests (GET /:id)', () => {

    beforeAll(async () => {
            await testServer.start();

          });
          afterAll(async() =>{
            await testServer.close()
          })

    describe('GET /api/v1/users/:id - Find one user', () => {
        test('Should return a user with status 200 if the user is found', async () => {
            const mockUser = {
                id: 1,
                name: 'UserP',
                lastname: 'Prueba',
                videogames: [{ name: 'Zelda' }],
            };
            (User.findOne as jest.Mock).mockResolvedValue(mockUser);
            const response = await request(testServer.app)
                .get('/api/v1/users/1')
                .expect(200);
            console.log(response)
            expect(response.body).toEqual(mockUser);
            expect(response.body.videogames[0].name).toBe('Zelda');
        });


    });
});