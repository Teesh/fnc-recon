'use strict'

import mysql from 'promise-mysql'

// createUnixSocketPool initializes a Unix socket connection pool for
// a Cloud SQL instance of MySQL.
export const createUnixSocketPool = async (config: mysql.PoolConfig) => {
  // Note: Saving credentials in environment variables is convenient, but not
  // secure - consider a more secure solution such as
  // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
  // keep secrets safe.
  return mysql.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    socketPath: process.env.INSTANCE_UNIX_SOCKET, // e.g. '/cloudsql/project:region:instance'
    // Specify additional properties here.
    ...config,
  })
}

module.exports = createUnixSocketPool