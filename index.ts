import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { createUnixSocketPool } from './sqlconnector'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

try {
  const sql = createUnixSocketPool({})
} catch (err) {
  console.log(err)
}

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the FNC Recon Tool')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})