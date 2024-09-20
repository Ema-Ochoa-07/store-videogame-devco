import { testServer } from "../../test-server";
import { User } from "../../../src/data"; 
import request from "supertest"; 

jest.mock("../../../src/data", () => {
    return {
        User: {
            findOne: jest.fn(),
            prototype: {
                save: jest.fn().mockResolvedValue({
                    id: 1,
                    username: 'testuser',
                    email: 'test@example.com',
                    status: 'DISABLED',
                }),
            },
        },
    };
});

describe('user route tests (DELETE /:id)', () => {

    beforeAll(async () => {
        await testServer.start();
    });

    afterAll(async () => {
        await testServer.close();
    });

    describe('DELETE /api/v1/users/:id - Delete a user', () => {
        test('Should disable a user and return status 200', async () => {
            const mockUser = {
                id: 1,
                username: 'testuser',
                email: 'test@example.com',
                status: 'ACTIVE', // Estado inicial
                save: jest.fn().mockResolvedValue({
                    id: 1,
                    username: 'testuser',
                    email: 'test@example.com',
                    status: 'DISABLED',
                }),
            };

            (User.findOne as jest.Mock).mockResolvedValue(mockUser);

            const response = await request(testServer.app)
                .delete('/api/v1/users/1')
                .expect(200);

            expect(response.body.status).toBe("DISABLED");
            expect(mockUser.save).toHaveBeenCalled();
        });
    });
});
