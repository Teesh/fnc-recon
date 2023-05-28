import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { pool, createPoolAndEnsureSchema, getSchema } from './src/services/db.service'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(async (req, res, next) => {
  if (pool) {
    return next()
  }
  try {
    await createPoolAndEnsureSchema()
    next()
  } catch (err) {
    return next(err)
  }
})

app.set('json spaces', 2)

app.get('/', async (req: Request, res: Response) => {
  if (!pool) {
    res.send('sql connector failed to instantiate')
    return
  }
  try {
    let schema = await getSchema()
    res.json(schema)
  } catch (err) {
    res.send('' + err)
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})