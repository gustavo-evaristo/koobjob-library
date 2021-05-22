import { getCustomRepository, Repository } from 'typeorm'
import Books from '../models/entities/Books'
import BooksRepository from '../repositories/BooksRepository'

// interface para criação de livro
interface IBooksCreate {
  name: string;
  author: string;
  category: string;
  quantity: number;
  publisher: string;
}

// Criando os serviços
export default class BooksServices {
  private booksRepository: Repository<Books>;

  constructor () {
    this.booksRepository = getCustomRepository(BooksRepository)
  }

  // Função para cadastrar um novo livro
  async create ({ name, author, category, quantity, publisher }: IBooksCreate) {
    // Verificando se os campos são válidos
    if (
      name === undefined ||
      author === undefined ||
      category === undefined ||
      quantity === undefined ||
      publisher === undefined
    ) {
      // Caso seja inválido, retorna uma resposata de erro do cliente
      throw new Error('Invalid Fields')
    }

    // Verificando se ja existe algum livro com o mesmo nome, autor e categoria
    // Caso ja exista o livro, aumenta a quantidade em estoque
    const bookAlreadyexists: any = await this.booksRepository.findOne({
      where: {
        name,
        author,
        category
      }
    })

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

  // Função para listar todos os livros
  async find () {
    const books = await this.booksRepository.find({
      order: { name: 'ASC', author: 'ASC' }
    })

    return books
  }
}
