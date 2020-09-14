import { Router, Request, Response } from 'express'
import authController from './modules/authController'

const app = Router()

app.use('/auth', authController)

export default app