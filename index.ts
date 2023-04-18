import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { testConnection } from './sql-tools'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

let testSQL = await testConnection()

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the FNC Recon Tool: ' + testSQL)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})