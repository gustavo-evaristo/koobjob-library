import express from 'express'
import cors from 'cors'
import routes from './routes'

class App {
  express: express.Application

  constructor () {
    this.express = express()
    this.database()
    this.middlewares()
    this.routes()
  }

  private database () {

  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
