import { Request, Response } from 'express'
import BooksService from '../services/booksServices'

class BooksController {
  async create (req: Request, res: Response): Promise<Response> {
    // Instanciando a classe BookServices
    const booksService = new BooksService()

    // Recebendo os dados da requisição
    const { name, author, category, quantity, publisher } = req.body

    // Verificando se os dados são válidos
    if (name === undefined || author === undefined || category === undefined || quantity === undefined || publisher === undefined) {
      // Caso seja inválido, retorna uma resposata de erro do cliente
      return res.status(400).json({ message: 'Invalid Fields' })
    }

    try {
      const book = await booksService.create({ name, author, category, quantity, publisher })

      return res.status(200).json(book)
    } catch (err) {
      return res.status(400)
    }
  }

  // async find (req: Request, res: Response): Promise<Response> {

  // }
}

export default new BooksController()
