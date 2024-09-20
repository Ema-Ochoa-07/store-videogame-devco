import { testServer } from "../../test-server";
import { Videogame } from "../../../src/data"; 
import request from "supertest"; 
jest.mock("../../../src/data", () => {
    return {
        Videogame: {
            findOne: jest.fn(),
        },
    };
});
describe('Videogame route tests (GET /:id)', () => {

    beforeAll(async () => {
            await testServer.start();

          });
          afterAll(async() =>{
            await testServer.close()
          })

    describe('GET /api/v1/videogames/:id - Find one videogames', () => {
        test('Should return a videogame with status 200 if the videogame is found', async () => {
            const mockVideogame = {
                id: 1,
                name: 'Halo',
                console: 'Xbox',
                amount: 60000,
                quantity: 1
            };
        
            (Videogame.findOne as jest.Mock).mockResolvedValue(mockVideogame);
        
            const response = await request(testServer.app)
                .get('/api/v1/videogames/1')
                .expect(200);
        
            expect(response.body).toEqual(mockVideogame);
            expect(response.body.name).toBe('Halo');
        });
        


    });
});