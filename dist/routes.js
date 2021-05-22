"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BooksController_1 = __importDefault(require("./controllers/BooksController"));
const routes = express_1.Router();
// Cadastro de livros
routes.get('/', BooksController_1.default.find);
routes.post('/', BooksController_1.default.create);
exports.default = routes;
