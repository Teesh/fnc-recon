// place database query functions here
import { Pool } from 'promise-mysql'
import { query } from './db.service'

export interface Report {
  reporting_team: number,
  year: number,
  event: string,
  match: string,
  scouted_team: number,
  alliance: boolean
}

export const getReports = async () => {
  return query(`
    SELECT *
    FROM reports
  `)
}

export const addReport = async (report: Report) => {
  return query(`
      INSERT INTO reports
        (
          reporting_team,
          year,
          event,
          match,
          scouted_team,
          alliance
        )
      VALUES
        (?, ?, ?, ?, ?, ?)
    `,
    [
      report.reporting_team,
      report.year,
      report.event,
      report.match,
      report.scouted_team,
      report.alliance
    ]
  )
}

export const editReport = async (id: string, report: Report) => {
  return query(`
      UPDATE reports
      SET
        reporting_team=?,
        year=?,
        event=?,
        match=?,
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