/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import './styles.css'
import Close from '../../assets/close.svg'
import handleSubmit from '../../services/submit'

const Modal = ({ id = 'modal', onClose = () => {} }) => {
  const handleClick = (e: any) => {
    if (e.target.id === id) onClose()
  }

  const [name, setName] = useState()
  const [author, setAuthor] = useState()
  const [category, setCategory] = useState()
  const [publisher, setPublisher] = useState()
  const [quantity, setQuantity] = useState()

  const state: any = {
    name,
    author,
    category,
    publisher,
    quantity
  }

  return (
    <div id={ id } className="modal" onClick={ handleClick }>
      <div className="modal-container">
        <form className="modal-content" onSubmit={ e => handleSubmit(e, state) }>
          <div className="close-modal">
            <img src={ Close } alt="Close" onClick={ onClose }/>
          </div>
          <div className="modal-fields">
            <input type="text" placeholder="Nome" name="name" onChange={(e: any) => setName(e.target.value)}/>
            <p></p>
            <input type="text" placeholder="Autor" onChange={(e: any) => setAuthor(e.target.value)}/>
            <input type="text" placeholder="Categoria" onChange={(e: any) => setCategory(e.target.value)}/>
            <input type="text" placeholder="Editora" onChange={(e: any) => setPublisher(e.target.value)}/>
            <input type="number" placeholder="quantidade" onChange={(e: any) => setQuantity(e.target.value)}/>
          </div>
          <div className="modal-button">
            <button className="btn modal-btn">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
