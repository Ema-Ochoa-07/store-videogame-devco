import { testServer } from "../../test-server";

jest.mock("../../../src/data", () => {
  return {
    PostgresDatabase: jest.fn().mockImplementation(() => {
      return { connect: jest.fn() };
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
    Videogame: jest.fn().mockImplementation(() => {
      return {
        save: jest.fn().mockResolvedValue({
          id: 1,
          name: "GameP",
          console: "PlayStation",
          quantity: 10,
          amount: 50000,
          userId: 1,
        }),
      };
    }),
    Purchase: jest.fn().mockImplementation(() => {
      return {
        save: jest.fn().mockResolvedValue({
          id: 1,
          userId: 1,
          videogameId: 1,
          amount: 50000,
          quantity: 1,
        }),
      };
    }),
  };
});

describe("Purchase Routes", () => {
  beforeAll(async () => {
    await testServer.start();
  });

  afterAll(async () => {
    await testServer.close();
  });

  test("Should create a purchase and return status 200", async () => {


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
        Videogame: jest.fn().mockImplementation(() => {
          return {
            save: jest.fn().mockResolvedValue({
              id: 1,
              name: "GameX",
              console: "ConsoleX",
              quantity: 10,
              amount: 5000,
              userId: 1,
            }),
          };
        }),
        Purchase: jest.fn().mockImplementation(() => {
          return {
            save: jest.fn().mockResolvedValue({
              id: 1,
              userId: 1,
              videogameId: 1,
              quantity: 1,
              amount: 5000,
            }),
          };
        }),
      };
    });

  });
});
