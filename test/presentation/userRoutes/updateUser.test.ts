import { testServer } from "../../test-server";
import { User } from "../../../src/data"; 
import request from "supertest"; 

jest.mock("../../../src/data", () => {
    return {
        User: {
            findOne: jest.fn(),
            prototype: {
                save: jest.fn(),
            },
        },
    };
});

describe('user route tests (PATCH /:id)', () => {

    beforeAll(async () => {
        await testServer.start();
    });

    afterAll(async () => {
        await testServer.close();
    });

    describe('PATCH /api/v1/users/:id - Update a user', () => {
        test('Should update a user partially and return status 200', async () => {
            const mockUser = {
                id: 1,
                name: 'Enmanuel',
                lastname: 'Ochoa',
                amount: 300000,
                save: jest.fn().mockResolvedValue({
                    id: 1,
                    name: 'Ema',
                    lastname: 'Cedeño',
                    amount: 300000,
                }),
            };

            (User.findOne as jest.Mock).mockResolvedValue(mockUser);

            const response = await request(testServer.app)
                .patch('/api/v1/users/1')
                .send({ name: 'Ema', lastname: 'Cedeño' })
                .expect(200);

            expect(response.body.name).toBe('Ema');
            expect(response.body.lastname).toBe('Cedeño');
            expect(response.body).toEqual({
                id: 1,
                name: 'Ema',
                lastname: 'Cedeño',
                amount: 300000,
            });

            expect(mockUser.save).toHaveBeenCalled();
        });
    });
});
