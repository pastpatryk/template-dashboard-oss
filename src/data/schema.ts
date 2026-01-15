export type Usage = {
  owner: string
  status: string
  costs: number
  region: string
  stability: number
  lastEdited: string
}

export type OverviewData = {
  date: string
  "Rows written": number
  "Rows read": number
  Queries: number
  "Payments completed": number
  "Sign ups": number
  Logins: number
}

export type Car = {
  id: string
  model: string
  licensePlate: string
  assignedDriver: string
}

export type FleetDailyUsage = {
  date: string
  "Distance (km)": number
}
