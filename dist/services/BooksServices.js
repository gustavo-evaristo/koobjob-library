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
const typeorm_1 = require("typeorm");
const BooksRepository_1 = __importDefault(require("../repositories/BooksRepository"));
// Criando os serviços
class BooksServices {
    constructor() {
        this.booksRepository = typeorm_1.getCustomRepository(BooksRepository_1.default);
    }
    // Função para cadastrar um novo livro
    create({ name, author, category, quantity, publisher }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Verificando se os campos são válidos
            if (name === undefined ||
                author === undefined ||
                category === undefined ||
                quantity === undefined ||
                publisher === undefined) {
                // Caso seja inválido, retorna uma resposata de erro do cliente
                throw new Error('Invalid Fields');
            }
            // Verificando se ja existe algum livro com o mesmo nome, autor e categoria
            // Caso ja exista o livro, aumenta a quantidade em estoque
            const bookAlreadyexists = yield this.booksRepository.findOne({
                where: {
                    name,
                    author,
                    category
                }
            });
            if (bookAlreadyexists) {
                bookAlreadyexists.quantity += quantity;
                yield this.booksRepository.save(bookAlreadyexists);
                return bookAlreadyexists;
            }
            // Caso não exista o livro, realiza a criação
            const book = this.booksRepository.create({
                name,
                author,
                category,
                quantity,
                publisher
            });
            yield this.booksRepository.save(book);
            return book;
        });
    }
    // Função para listar todos os livros
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.booksRepository.find({
                order: { name: 'ASC', author: 'ASC' }
            });
            return books;
        });
    }
}
exports.default = BooksServices;
