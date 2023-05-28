// set up routes here
import express from 'express'
import {get, create, update, remove } from '../controllers/api.controller'

let router = express.Router()

/* GET programming languages. */
router.get('/', get)
  
/* POST programming language */
router.post('/', create)

/* PUT programming language */
router.put('/:id', update)

/* DELETE programming language */
router.delete('/:id', remove)
