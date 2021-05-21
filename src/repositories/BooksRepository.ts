import { EntityRepository, Repository } from 'typeorm'
import Books from '../models/entities/Books'

// Criando o repository da entidade Books
@EntityRepository(Books)
export default class BooksRepository extends Repository<Books> {}
