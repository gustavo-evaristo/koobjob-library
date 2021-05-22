"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./database"));
class App {
    constructor() {
        this.express = express_1.default();
        this.database();
        this.middlewares();
        this.routes();
    }
    database() {
        database_1.default();
    }
    middlewares() {
        // Permitindo arquivos json
        this.express.use(express_1.default.json());
        // Habilitando o acesso externo da API
        this.express.use(cors_1.default());
    }
    routes() {
        // Rotas da aplicação
        this.express.use(routes_1.default);
    }
}
exports.default = new App().express;
