"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VidegamesRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const videogame_service_1 = require("../services/videogame.service");
const user_service_1 = require("../services/user.service");
class VidegamesRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const videogameService = new videogame_service_1.VideogameService(userService);
        const videogameController = new controller_1.VideogamesController(videogameService);
        router.get('/', videogameController.findAllVideogames);
        router.post('/', videogameController.createVideogames);
        router.get('/:id', videogameController.findOneVideogames);
        router.patch('/:id', videogameController.updateVideogames);
        router.delete('/:id', videogameController.updateVideogames);
        return router;
    }
}
exports.VidegamesRoutes = VidegamesRoutes;
