/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Books extends Component {
  // definido o estado dos livros como um array
  state = {
    books: []
  }

  // Buscando os dados na api
  async componentDidMount () {
    const response = await api.get('/')

    // Verificando os livros que possuem quantidade = 0
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].quantity === 0) {
        response.data[i].quantity = 'Sem estoque'
      }
    }

    // Definido o estado dos livros
    this.setState({
      books: response.data
    })
  }

  render () {
    const { books } = this.state
    return (
      <section className="BooksContainer">
        <h2>livros cadastrados</h2>
          <div className="books">
            { books.map((book: any) => (
              <div className="book" key={ book.id }>
                <h3>{ book.name }</h3>
                <h4>{ book.author }</h4>
                <h4>{ book.category }</h4>
                <h4>{ book.publisher }</h4>
                <h4>{ book.quantity }</h4>
              </div>
            ))}
        </div>
      </section>
    )
  }
}
