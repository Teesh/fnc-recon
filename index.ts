import express, { Express } from 'express'
import dotenv from 'dotenv'
import { pool, createPoolAndEnsureSchema } from './src/services/db.service'
import { router } from './src/routes/api.routes'

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

app.use('/', router)

app.set('json spaces', 2)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})