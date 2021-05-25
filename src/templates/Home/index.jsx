/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import './styles.css'
import Header from './Header'
import Content from './Content'
import search from '../../assets/search.svg'

export default class Home extends Component {
  render () {
    return (
      <main>
        <div className="container">
        <Header />
        <Content />
        <section className="search">
          <div className="field">
            <img src={ search } alt="" />
            <input type="text" placeholder="Digite o nome do livro" />
            <button>Buscar</button>
          </div>
          <a href="/">Acessar todos os livros</a>
        </section>
        </div>
      </main>
    )
  }
}
