"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamesController = void 0;
class VideogamesController {
    constructor(videogameService) {
        this.videogameService = videogameService;
        this.createVideogames = (req, res) => {
            const { name, console, quantity } = req.body;
            this.videogameService.createVideogame({ name, console, quantity })
                .then((videgame) => {
                res.status(201).json(videgame);
            })
                .catch((error) => {
                res.status(500).json(error);
            });
        };
        this.findAllVideogames = (req, res) => {
            res.status(200).json({ message: 'ok' });
        };
        this.findOneVideogames = (req, res) => {
        };
        this.updateVideogames = (req, res) => {
        };
        this.deleteVideogames = (req, res) => {
        };
    }
}
exports.VideogamesController = VideogamesController;
