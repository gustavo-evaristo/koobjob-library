import express from 'express'
import cors from 'cors'
import routes from './routes'
import createConnection from './database'

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

    // Habilitando o acesso externo da API
    this.express.use(cors())
  }

  private routes () {
    // Rotas da aplicação
    this.express.use(routes)
  }
}

export default new App().express
