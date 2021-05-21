import { getCustomRepository, Repository } from 'typeorm'
import Books from '../models/entities/Books'
import BooksRepository from '../repositories/BooksRepository'

  // interface para criação de livro
  interface IBooksCreate{
    name: string
    author: string
    category: string
    quantity: number
    publisher: string
  }

// Criando os serviços
export default class BooksServices {
  private booksRepository: Repository<Books>

  constructor () {
    this.booksRepository = getCustomRepository(BooksRepository)
  }

  async create ({ name, author, category, quantity, publisher }: IBooksCreate) {
    // Verificando se ja existe algum livro com o memso nome, autor e categoria
    const bookAlreadyexists: any = await this.booksRepository.findOne({
      where: {
        name,
        author,
        category
      }
    })

    // Caso ja exista o livro, aumenta a quantidade em estoque
    if (bookAlreadyexists) {
      bookAlreadyexists.quantity += quantity

      await this.booksRepository.save(bookAlreadyexists)

      return bookAlreadyexists
    }

    // Caso não exista o livro, realiza a criação
    const book = this.booksRepository.create({
      name,
      author,
      category,
      quantity,
      publisher
    })

    await this.booksRepository.save(book)

    return book
  }
}
