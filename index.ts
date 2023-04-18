import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { createUnixSocketPool } from './sql-connector'
import { Pool } from 'promise-mysql'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const createPool = async () => {
  const config = {
    // [START cloud_sql_mysql_mysql_limit]
    // 'connectionLimit' is the maximum number of connections the pool is allowed
    // to keep at once.
    connectionLimit: 5,
    // [END cloud_sql_mysql_mysql_limit]

    // [START cloud_sql_mysql_mysql_timeout]
    // 'connectTimeout' is the maximum number of milliseconds before a timeout
    // occurs during the initial connection to the database.
    connectTimeout: 10000, // 10 seconds
    // 'acquireTimeout' is the maximum number of milliseconds to wait when
    // checking out a connection from the pool before a timeout error occurs.
    acquireTimeout: 10000, // 10 seconds
    // 'waitForConnections' determines the pool's action when no connections are
    // free. If true, the request will queued and a connection will be presented
    // when ready. If false, the pool will call back with an error.
    waitForConnections: true, // Default: true
    // 'queueLimit' is the maximum number of requests for connections the pool
    // will queue at once before returning an error. If 0, there is no limit.
    queueLimit: 0, // Default: 0
    // [END cloud_sql_mysql_mysql_timeout]

    // [START cloud_sql_mysql_mysql_backoff]
    // The mysql module automatically uses exponential delays between failed
    // connection attempts.
    // [END cloud_sql_mysql_mysql_backoff]
  }

  if (process.env.INSTANCE_CONNECTION_NAME_SECRET) {
    // Use a Unix socket when INSTANCE_CONNECTION_NAME_SECRET (e.g., /cloudsql/proj:region:instance) is defined.
    return createUnixSocketPool(config)
  } else {
    throw 'Set `INSTANCE_CONNECTION_NAME_SECRET` environment variable.'
  }
}

const ensureSchema = async (pool: Pool) => {
  // Wait for tables to be created (if they don't already exist).
  await pool.query(`SHOW TABLES`)
}

const createPoolAndEnsureSchema = async () =>
  await createPool()
    .then(async pool => {
      await ensureSchema(pool)
      return pool
    })
    .catch(err => {
      throw process.env.INSTANCE_CONNECTION_NAME_SECRET + err
    })

// Set up a variable to hold our connection pool. It would be safe to
// initialize this right away, but we defer its instantiation to ease
// testing different configurations.
let pool: Pool

app.use(async (req, res, next) => {
  if (pool) {
    return next()
  }
  try {
    pool = await createPoolAndEnsureSchema()
    next()
  } catch (err) {
    return next(err)
  }
})

app.get('/', async (req: Request, res: Response) => {
  res.send('Welcome to the FNC Recon Tool: ')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})