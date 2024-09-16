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
                return res.status(201).json(user);
            })
                .catch((error) => {
                return res.status(500).json(error);
            });
        };
        this.findOneUsers = (req, res) => {
            const { id } = req.params;
            this.userService.findOneUser(+id)
                .then(user => res.status(200).json(user))
                .catch(error => res.status(500).json(error));
        };
        this.findAllUsers = (req, res) => {
            this.userService.findAllUsers()
                .then(users => res.status(200).json(users))
                .catch(error => res.status(500).json(error));
        };
        this.updateUsers = (req, res) => {
            const { id } = req.params;
            const { name, lastname } = req.body;
            if (isNaN(+id)) {
                return res.status(400).json({ message: 'El id debe ser un número' });
            }
            this.userService.updateUsers({ name, lastname }, +id)
                .then((user) => {
                return res.status(200).json(user);
            })
                .catch((error) => {
                return res.status(500).json(error);
            });
        };
        this.deleteUsers = (req, res) => {
        };
    }
}
exports.UsersController = UsersController;
