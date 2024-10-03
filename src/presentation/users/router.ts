import { Router, Request, Response  } from "express";
import { UsersController } from "./controller";
import { UserService } from "../services/user.service";

export class UsersRoutes {
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const constroller = new UsersController(userService);



    router.get("/", constroller.findAllUsers);
    router.post("/", constroller.createUsers);
    router.get("/:id", constroller.findOneUsers);
    router.patch("/:id", constroller.updateUsers);
    router.delete("/:id", constroller.deleteUsers);

    return router;
  }
}
