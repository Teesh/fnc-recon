// place database query functions here
import { query } from './db.service'
import { Report } from './api.types'

export const getSchema = async () => {
  return query(`
    DESCRIBE reports
  `)
}

export const getAllReports = async () => {
  return query(`
    SELECT *
    FROM reports
  `)
}

export const addReport = async (report: Report) => {
  return query(`INSERT INTO reports 
      (
        reporting_team,
        year,
        \`event\`,
        \`match\`,
        scouted_team,
        alliance
      ) 
      VALUES ?
    `,
    [ Object.values(report) ]
  )
}

export const editReport = async (id: string, report: Report) => {
  return query(`
      UPDATE reports
      SET
        reporting_team=?,
        year=?,
        event=?,
        "match"=?,
        scouted_team=?,
        alliance=?
      WHERE
        id=?
    `,
    [
      report.reporting_team,
      report.year,
      report.event,
      report.match,
      report.scouted_team,
      report.alliance,
      id
    ]
  )
}

export const deleteReport = async (id: string) => {
  return query(`
      DELETE
      FROM reports
      WHERE id=?
    `,
    [id]
  )
}