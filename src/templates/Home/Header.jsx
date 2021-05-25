/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import logo from '../../assets/logo.svg'

export default class Header extends Component {
  render () {
    return (
      <header>
        <img src={ logo } alt="logo" />
        <button>Adicionar</button>
      </header>
    )
  }
}
