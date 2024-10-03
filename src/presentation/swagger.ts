import express, { Application, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Metadata info about your API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Store Videogame API", version: "1.0.0" },
  },
  apis: ["src/presentation/routes.ts"],
};

// Docs JSON format
const swaggerSpec = swaggerJSDoc(options);

export class SwaggerDocs {
  static setup(app: Application, port: number) {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use("/api/v1/docs/json", (req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
    console.log(
      `📙 Versión 1 Docs available at http://localhost:${port}/api/v1/docs`
    );
  }
}
