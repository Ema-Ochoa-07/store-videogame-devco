"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const router_1 = require("./videogames/router");
const router_2 = require("./users/router");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/v1/users', router_2.UsersRoutes.routes);
        router.use('/api/v1/videogames', router_1.VidegamesRoutes.routes);
        //stores_vgames_db
        return router;
    }
}
exports.AppRoutes = AppRoutes;
