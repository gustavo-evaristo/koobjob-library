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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooksServices_1 = __importDefault(require("../services/BooksServices"));
// Criando o controller de livros
class BooksController {
    // Controller para cadastro de novo livro
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Instanciando a classe BookServices
            const booksService = new BooksServices_1.default();
            // Recebendo os dados da requisição
            const { name, author, category, quantity, publisher } = req.body;
            // Tentando realizar a criação de um novo livro
            try {
                const book = yield booksService.create({
                    name,
                    author,
                    category,
                    quantity,
                    publisher
                });
                return res.status(200).json(book);
                // Caso ocorra algum erro, retorna para o cliente
            }
            catch (err) {
                return res.status(400).json({ message: err.message });
            }
        });
    }
    // Controller para listar todos os livros
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Instanciando a classe BookServices
            const booksService = new BooksServices_1.default();
            // buscando todos os livros
            const books = yield booksService.find();
            return res.status(201).json(books);
        });
    }
}
exports.default = new BooksController();
