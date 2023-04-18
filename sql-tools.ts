import { createUnixSocketPool } from './sql-connector'

export async function testConnection() {
    try {
        const stmt = 'SHOW TABLES'
        // Pool.query automatically checks out, uses, and releases a connection
        // back into the pool, ensuring it is always returned successfully.
        let pool = await createUnixSocketPool({})
        let response = pool.query(stmt)
        return response
    } catch (err) {
        // If something goes wrong, handle the error in this section. This might
        // involve retrying or adjusting parameters depending on the situation.
        // ...
    }
}