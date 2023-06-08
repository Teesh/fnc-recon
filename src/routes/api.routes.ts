// set up routes here
import express from 'express'
import { create, get, getAllTeamData, getReports, getTeamDataSpecific, remove, update } from '../controllers/api.controller'

export let router = express.Router()

/* GET schema */
router.get('/', get)

/* GET reports */
router.get('/reports', getReports)

/* GET team data */
router.get('/reports/:scouted_team', getAllTeamData)

/* GET team data year */
router.get('/reports/:scouted_team/:var', getTeamDataSpecific)

/* POST programming language */
router.post('/reports', create)

/* PUT programming language */
router.put('/reports/:id', update)

/* DELETE programming language */
router.delete('/reports/:id', remove)
