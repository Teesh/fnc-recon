// place database query functions here
import { query } from './db.service'

export interface Report {
  reporting_team: number,
  year: number,
  event: string,
  match: string,
  scouted_team: number,
  alliance: number
}

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

export const getTeamReports = async (teamName: String) => {
  return query(`
    SELECT * FROM reports
    WHERE scouted_team = ${teamName}
  `)
}

export const getTeamReportsSpecific = async (teamName: String, identifier: String) => {
  return query(`
    SELECT * FROM reports
    WHERE (scouted_team = ${teamName}) AND year = ${identifier} OR event = ${identifier}
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
      VALUES (?,?,?,?,?,?)
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