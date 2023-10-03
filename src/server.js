import express from 'express'
import { SERVER } from './config.js'
import userRoutes from '../routes/users.js'
const app = express()
const port = SERVER.PORT

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

app.use('/users/',userRoutes)

app.all('*', (req, res) => {
    res.status(404).json({ message: '404 Rota não encontrada...' })
  })