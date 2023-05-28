// place database query functions here
import { Pool } from 'promise-mysql'
import { query } from './db.service'

const getSchema = async () => {
  return query('DESCRIBE reports')
}