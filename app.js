import express from 'express'
import routerLivros from './routes/livrosRouter.js'

const app = express()
app.use(express.json())

const port = 8000

// Montagem de roteador de "livros"

app.use('/livros', routerLivros)

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Estudando na porta ${port}`)
})