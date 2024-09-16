"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = exports.UserStatus = void 0;
const data_1 = require("../../data");
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["DISABLED"] = "DISABLED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
class UserService {
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            //VerificarQue el usuario exista
            const user = new data_1.User();
            user.name = userData.name.toLowerCase().trim();
            user.lastname = userData.lastname.toLowerCase().trim();
            try {
                return yield user.save();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield data_1.User.findOne({
                where: {
                    id: id
                },
                select: {
                    videogames: {
                        name: true
                    }
                },
                relations: ['videogames']
            });
            if (!user)
                throw Error('Usuario no encontrado');
            return user;
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield data_1.User.find({
                    where: {
                        status: UserStatus.ACTIVE
                    }
                });
            }
            catch (error) {
                throw new Error('Ups Error algo salió mal 🧨');
            }
        });
    }
    updateUsers(userData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOneUser(id);
            user.name = userData.name.toLowerCase().trim();
            user.lastname = userData.toLowerCase().trim();
            try {
                return yield user.save();
            }
            catch (error) {
                throw new Error('Ups Error algo salió mal 🧨');
            }
        });
    }
}
exports.UserService = UserService;
