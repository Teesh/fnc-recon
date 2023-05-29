// set up routes here
import express from 'express'
import {get, getReports, create, update, remove } from '../controllers/api.controller'

export let router = express.Router()

/* GET schema */
router.get('/', get)

/* GET reports */
router.get('/reports', getReports)
  
/* POST programming language */
router.post('/reports', create)

/* PUT programming language */
router.put('/reports/:id', update)

/* DELETE programming language */
router.delete('/reports/:id', remove)
