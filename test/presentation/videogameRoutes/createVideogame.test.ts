import { testServer } from "../../test-server";
import { PostgresDatabase, User, Videogame } from "../../../src/data"; // Asegúrate que esta importación sea válida
import request from "supertest";
import { envs } from "../../../src/config/envs";

// Mockeamos la base de datos para evitar la conexión real

jest.mock("../../../src/data", () => {
  return {
    PostgresDatabase: jest.fn().mockImplementation(() => {
      return {
        connect: jest.fn(),
      };
    }),

    Videogame: jest.fn().mockImplementation(() => {
      return {
        save: jest.fn().mockResolvedValue({
          id: 1,
          name: "fall guys",
          console: "Prueba",
        }),

      };
    }),
  };
});

describe("Videogame testing routes", () => {
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

  describe("Create videogame test", () => {
    test("Should create a videogame and return status 201", async () => {
      const videogame = {
        name: "fall guys",
        console: "Prueba",
        quantity: 5,
        cost: 10000,
        amount: 80000,
      };

      const response = await request(testServer.app)
        .post("/api/v1/videogames/")
        .send(videogame)
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body.name).toBe(videogame.name);
      expect(response.body.console).toBe(videogame.console);
    });

  });


});
