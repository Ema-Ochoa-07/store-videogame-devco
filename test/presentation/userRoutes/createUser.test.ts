import { testServer } from "../../test-server";
import { PostgresDatabase} from "../../../src/data";
import request from "supertest";

// Mockeamos la base de datos para evitar la conexión real

jest.mock("../../../src/data", () => {
  return {
    PostgresDatabase: jest.fn().mockImplementation(() => {
      return {
        connect: jest.fn(),
      };
    }),

    User: jest.fn().mockImplementation(() => {
      return {
        save: jest.fn().mockResolvedValue({
          id: 1,
          name: "UserP",
          lastname: "Prueba",
          amount: 200000,
        }),

      };
    }),
  };
});

describe("User testing routes", () => {
  let db: PostgresDatabase;

  beforeAll(async () => {
    await testServer.start();
    db = new PostgresDatabase({
      host: "HOST",
      port: 5432,
      username: "EMA",
      password: "1234",
      database: "BD",
    });
    await db.connect();
  });

  afterAll(async() =>{
    await testServer.close()
  })

  describe("Create user test", () => {
    test("Should create a user and return status 200", async () => {
      const user = {
        name: "UserP",
        lastname: "Prueba",
        amount: 200000,
      };

      const response = await request(testServer.app)
        .post("/api/v1/users/")
        .send(user)
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body.name).toBe(user.name);
      expect(response.body.lastname).toBe(user.lastname);
    });

  });

});
