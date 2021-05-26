/* eslint-disable no-use-before-define */
import React from 'react'
import './styles.css'
import Header from '../../components/Header'
import Books from '../../components/Books'

const Home = () => {
  return (
      <main>
        <Header />
        <Books />
      </main>
  )
}

export default Home
