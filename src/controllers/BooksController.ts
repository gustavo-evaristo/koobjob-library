import { Request, Response } from 'express'
import BooksService from '../services/BooksServices'

// Criando o controller de livros
class BooksController {
  // Controller para cadastro de novo livro
  async create (req: Request, res: Response): Promise<Response> {
    // Instanciando a classe BookServices
    const booksService = new BooksService()

    // Recebendo os dados da requisição
    const { name, author, category, quantity, publisher } = req.body

    // Tentando realizar a criação de um novo livro
    try {
      const book = await booksService.create({
        name,
        author,
        category,
        quantity,
        publisher
      })
      return res.status(200).json(book)

    // Caso ocorra algum erro, retorna para o cliente
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }

  // Controller para listar todos os livros
  async find (req: Request, res: Response): Promise<Response> {
    // Instanciando a classe BookServices
    const booksService = new BooksService()

    // buscando todos os livros
    const books = await booksService.find()
    return res.status(201).json(books)
  }
}

export default new BooksController()
