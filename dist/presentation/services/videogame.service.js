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
exports.VideogameService = void 0;
const data_1 = require("../../data");
class VideogameService {
    createVideogame(videogameData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validar que exista videogame
            const videogame = new data_1.Videogame();
            videogame.name = videogameData.name.toLowerCase().trim();
            videogame.console = videogameData.console.toLowerCase().trim();
            videogame.quantity = videogameData.quantity.trim();
            try {
                return yield videogame.save();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.VideogameService = VideogameService;
