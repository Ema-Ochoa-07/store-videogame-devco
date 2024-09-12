"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VidegamesRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const videogame_service_1 = require("../services/videogame.service");
class VidegamesRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const videogameService = new videogame_service_1.VideogameService;
        const controller = new controller_1.VideogamesController(videogameService);
        router.get('/', controller.findAllVideogames);
        router.post('/', controller.createVideogames);
        router.get('/:id', controller.findOneVideogames);
        router.patch('/:id', controller.updateVideogames);
        router.delete('/:id', controller.updateVideogames);
        return router;
    }
}
exports.VidegamesRoutes = VidegamesRoutes;
