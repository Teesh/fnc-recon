// establish controllers for each route here
import { Request, Response, NextFunction } from 'express'
import { getSchema, getAllReports, addReport, editReport, deleteReport } from '../services/api.service'

export const get = async (req: Request, res: Response) => {
  try {
    res.json(await getSchema())
  } catch (err) {
    res.send('' + err)
  }
}

export const getReports = async (req: Request, res: Response, next: NextFunction) => {
  try {
      res.json(await getAllReports())
  } catch (err: any) {
      console.error(`Error while getting reports`, err.message)
      next(err)
  }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await addReport(req.body))
  } catch (err: any) {
    console.error(`Error while adding report`, err.message)
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await editReport(req.params.id, req.body))
  } catch (err: any) {
    console.error(`Error while editing report`, err.message)
    next(err)
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await deleteReport(req.params.id))
  } catch (err: any) {
    console.error(`Error while deleting report`, err.message)
    next(err)
  }
}