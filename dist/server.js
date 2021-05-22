"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// Definindo a porta que o servidor vai rodar
const port = process.env.PORT || 3000;
// Iniciando o servidor
app_1.default.listen(port, () => console.log('server is running'));
