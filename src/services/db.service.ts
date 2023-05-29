// database connection and sql query abstraction
import { Pool } from 'promise-mysql'
import mysql from 'promise-mysql'

// Set up a variable to hold our connection pool. It would be safe to
// initialize this right away, but we defer its instantiation to ease
// testing different configurations.
export let pool: Pool

// createUnixSocketPool initializes a Unix socket connection pool for
// a Cloud SQL instance of MySQL.
export const createUnixSocketPool = async (config: mysql.PoolConfig) => {
  // Note: Saving credentials in environment variables is convenient, but not
  // secure - consider a more secure solution such as
  // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
  // keep secrets safe.
  return mysql.createPool({
    user: process.env.DB_USER_SECRET, // e.g. 'my-db-user'
    password: process.env.DB_PASS_SECRET, // e.g. 'my-db-password'
    database: process.env.DB_NAME_SECRET, // e.g. 'my-database'
    socketPath: '/cloudsql/' + process.env.INSTANCE_CONNECTION_NAME_SECRET, // e.g. '/cloudsql/project:region:instance'
    // Specify additional properties here.
    ...config,
  })
}

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

export const createPoolAndEnsureSchema = async (): Promise<Pool> => {
  pool = await createPool()
  console.log('sql connector created' + pool)
  try {
    await ensureSchema(pool)
    return pool
  } catch (err) {
    throw err
  }
}

export async function query(sql: string, params?: Array<any>) {
  return await pool.query(sql, params)
}