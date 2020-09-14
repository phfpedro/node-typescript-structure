import '@/config/enviroment'
import express, { Response, NextFunction } from 'express'
import routes from '@/controllers/routes'
import morgan from 'morgan'
import bodyPaser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyPaser.urlencoded({ extended: false }))
app.use(bodyPaser.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(routes)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`API disponível na porta url http://phfers.dyndns.org:${PORT}`)
})
