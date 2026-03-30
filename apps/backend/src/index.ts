import express from 'express'
import type { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/api/v1/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

app.listen(3001, () => console.log('Backend running on port 3001'))

export default app