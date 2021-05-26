/* eslint-disable react/react-in-jsx-scope */
import api from './api'

const handleSubmit = async (e: any, state: any) => {
  e.preventDefault()

  console.log(state)

  try {
    await api.post('/', state)
    alert('Livro adicionando com sucesso!')
    return window.location.reload()
  } catch (err) {
    return alert('Falha ao adicionar Livro!')
  }
}

export default handleSubmit
