"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamesController = void 0;
class VideogamesController {
    constructor(videogameService) {
        this.videogameService = videogameService;
        this.createVideogames = (req, res) => {
            const { name, console, quantity, userId } = req.body;
            this.videogameService.createVideogame({ name, console, quantity, userId })
                .then((videogame) => {
                res.status(201).json(videogame);
            })
                .catch((error) => {
                res.status(500).json(error);
            });
        };
        this.findAllVideogames = (req, res) => {
            res.status(200).json({ message: 'ok' });
        };
        this.findOneVideogames = (req, res) => {
            const { id } = req.params;
            this.videogameService.findOneVideogame(+id)
                .then(videogame => res.status(200).json(videogame))
                .catch(error => res.status(500).json(error));
        };
        this.updateVideogames = (req, res) => {
        };
        this.deleteVideogames = (req, res) => {
        };
    }
}
exports.VideogamesController = VideogamesController;
