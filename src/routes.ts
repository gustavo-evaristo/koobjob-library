import { Router } from 'express'
import BooksController from './controllers/BooksController'

const routes = Router()

// Cadastro de livros
routes.post('/', BooksController.create)

export default routes
