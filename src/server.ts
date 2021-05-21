import App from './app'

// Definindo a porta que o servidor vai rodar
const port = process.env.PORT || 3000

// Iniciando o servidor
App.listen(port, () => console.log('server is running'))
