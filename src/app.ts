import express from 'express'
import cors from 'cors'
import routes from './routes'
import createConnection from './database'
import path from 'path'

class App {
  // Definindo o tipo da variavel express
  express: express.Application

  constructor () {
    this.express = express()
    this.database()
    this.middlewares()
    this.routes()
  }

  private database () {
    createConnection()
  }

  private middlewares () {
    // Permitindo arquivos json
    this.express.use(express.json())

    //Disponibilizando os arquivos estáticos na pasta public
    this.express.use(express.static(path.join(__dirname, '..', 'public')))

    //Definido as imagens na pasta uploads
    this.express.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')))

    // Habilitando o acesso externo da API
    this.express.use(cors())
  }

  private routes () {
    // Rotas da aplicação
    this.express.use(routes)
  }
}

export default new App().express
