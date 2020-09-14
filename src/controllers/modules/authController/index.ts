import { Router, Response } from 'express'
import { Request } from '@/types'
import * as Provider from './provider'

const app = Router()

app.get('/me', async (req: Request, res: Response) => {
    try {
        return res.json({ message: 'Hello World' })
    } catch (error) {
        return res.status(200).json({ status: 0, message: 'Parâmetros de entrada incorretos.' })
    }
})

export default app