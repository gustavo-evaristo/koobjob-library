/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import Modal from '../Modal'
import Img from '../../assets/img.svg'
import './styles.css'

const Header = () => {
  // Definido as variaveis para mudar a visualização do modal
  const [openModal, setOpenModal] = useState(false)

  return (
      <header>
        <div className="text-content">
          <h1>Embarque neste mundo de <br/><span>Cultura e Conhecimento</span></h1>
          <div className="header-buttons-desktop">
            <button className="btn" onClick={() => setOpenModal(true)}>Cadastrar</button>
              { openModal && <Modal onClose={() => setOpenModal(false)}></Modal> }
          </div>
        </div>

        <div className="img-content">
          <img src={ Img } alt="" />
        </div>

        <div className="header-buttons">
          <button className="btn" onClick={() => setOpenModal(true)}>Cadastrar</button>
            { openModal && <Modal onClose={() => setOpenModal(false)}></Modal> }
        </div>
      </header>
  )
}

export default Header
