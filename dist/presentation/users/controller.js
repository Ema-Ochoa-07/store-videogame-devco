"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
class UsersController {
    constructor(userService) {
        this.userService = userService;
        this.createUsers = (req, res) => {
            const { name, lastname } = req.body;
            this.userService.createUser({ name, lastname })
                .then((user) => {
                res.status(201).json(user);
            })
                .catch((error) => {
                res.status(500).json(error);
            });
        };
        this.findAllUsers = (req, res) => {
            res.status(200).json({ message: 'ok' });
        };
        this.findOneUsers = (req, res) => {
        };
        this.updateUsers = (req, res) => {
        };
        this.deleteUsers = (req, res) => {
        };
    }
}
exports.UsersController = UsersController;
