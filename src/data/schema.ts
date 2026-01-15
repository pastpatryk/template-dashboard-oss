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

export type Vehicle = {
  id: string
  make: string
  model: string
  licensePlate: string
  driver: {
    name: string
    email: string
    phone: string
  }
  totalMiles: number
  status: "active" | "maintenance" | "inactive"
}

export type FleetUsageData = {
  date: string
  totalMiles: number
}

export type FleetStats = {
  activeVehicles: number
  totalVehicles: number
  vehicleChange: number
  fuelCosts: number
  fuelChangePercent: number
  utilizationRate: number
  utilizationChangePercent: number
}
