import { testServer } from "../../test-server"; 
import { Videogame } from "../../../src/data"; 
import request from "supertest"; 

jest.mock("../../../src/data", () => {
    return {
        Videogame: {
            find: jest.fn(), 
        },
    };
});

describe('Videogame route tests (GET /)', () => {

    beforeAll(async () => {
        await testServer.start();
    });

    afterAll(async () => {
        await testServer.close();
    });

    describe('GET /api/v1/videogames - Find all videogames', () => {
        test('Should return a list of videogames with status 200', async () => {
            const mockVideogames = [
                {
                    id: 1,
                    name: 'GTA5',
                    console: 'PC',
                    amount: 50000,
                    quantity: 4
                },
                {
                    id: 2,
                    name: 'BomberMan',
                    console: 'Arcade',
                    amount: 10000,
                    quantity: 5
                },
            ];
        
            (Videogame.find as jest.Mock).mockResolvedValue(mockVideogames);
        
            const response = await request(testServer.app)
                .get('/api/v1/videogames')
                .expect(200);
        
            expect(response.body).toEqual(mockVideogames);
            expect(response.body[0].name).toBe('GTA5');
            expect(response.body[1].name).toBe('BomberMan');
        });
        

    });
});
