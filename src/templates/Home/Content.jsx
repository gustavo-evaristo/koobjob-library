/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import img from '../../assets/img.svg'

export default class Content extends Component {
  render () {
    return (
      <div className="content">
        <div className="info">
          <h1>Embarque neste mundo de <br /><span>Cultura e Conhecimento</span></h1>
        </div>
        <div className="image">
          <img src={ img } alt="" />
        </div>
      </div>
    )
  }
}
