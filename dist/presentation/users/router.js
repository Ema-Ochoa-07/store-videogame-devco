"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const user_service_1 = require("../services/user.service");
class UsersRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService;
        const constroller = new controller_1.UsersController(userService);
        router.get('/', constroller.findAllUsers);
        router.post('/', constroller.createUsers);
        router.get('/:id', constroller.findOneUsers);
        router.patch('/:id', constroller.updateUsers);
        router.delete('/:id', constroller.deleteUsers);
        return router;
    }
}
exports.UsersRoutes = UsersRoutes;
