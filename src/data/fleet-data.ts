import { Vehicle, FleetUsageData, FleetStats } from "./schema"

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    make: "Ford",
    model: "F-150",
    licensePlate: "ABC-1234",
    driver: {
      name: "John Martinez",
      email: "j.martinez@company.com",
      phone: "(555) 234-5678",
    },
    totalMiles: 45230,
    status: "active",
  },
  {
    id: "v2",
    make: "Toyota",
    model: "Camry",
    licensePlate: "XYZ-9876",
    driver: {
      name: "Sarah Johnson",
      email: "s.johnson@company.com",
      phone: "(555) 345-6789",
    },
    totalMiles: 42150,
    status: "active",
  },
  {
    id: "v3",
    make: "Chevrolet",
    model: "Silverado",
    licensePlate: "DEF-5432",
    driver: {
      name: "Michael Chen",
      email: "m.chen@company.com",
      phone: "(555) 456-7890",
    },
    totalMiles: 38920,
    status: "active",
  },
  {
    id: "v4",
    make: "Honda",
    model: "Civic",
    licensePlate: "GHI-2468",
    driver: {
      name: "Emily Rodriguez",
      email: "e.rodriguez@company.com",
      phone: "(555) 567-8901",
    },
    totalMiles: 36540,
    status: "active",
  },
  {
    id: "v5",
    make: "Ford",
    model: "Transit",
    licensePlate: "JKL-1357",
    driver: {
      name: "David Kim",
      email: "d.kim@company.com",
      phone: "(555) 678-9012",
    },
    totalMiles: 34780,
    status: "active",
  },
  {
    id: "v6",
    make: "Toyota",
    model: "RAV4",
    licensePlate: "MNO-8642",
    driver: {
      name: "Jessica Thompson",
      email: "j.thompson@company.com",
      phone: "(555) 789-0123",
    },
    totalMiles: 32450,
    status: "active",
  },
  {
    id: "v7",
    make: "Chevrolet",
    model: "Malibu",
    licensePlate: "PQR-9753",
    driver: {
      name: "Robert Garcia",
      email: "r.garcia@company.com",
      phone: "(555) 890-1234",
    },
    totalMiles: 29860,
    status: "active",
  },
  {
    id: "v8",
    make: "Honda",
    model: "Accord",
    licensePlate: "STU-3691",
    driver: {
      name: "Amanda Williams",
      email: "a.williams@company.com",
      phone: "(555) 901-2345",
    },
    totalMiles: 27340,
    status: "active",
  },
  {
    id: "v9",
    make: "BMW",
    model: "X5",
    licensePlate: "VWX-7531",
    driver: {
      name: "Christopher Lee",
      email: "c.lee@company.com",
      phone: "(555) 012-3456",
    },
    totalMiles: 24920,
    status: "active",
  },
  {
    id: "v10",
    make: "Tesla",
    model: "Model 3",
    licensePlate: "YZA-1593",
    driver: {
      name: "Maria Gonzalez",
      email: "m.gonzalez@company.com",
      phone: "(555) 123-4567",
    },
    totalMiles: 22580,
    status: "active",
  },
  {
    id: "v11",
    make: "Ford",
    model: "Explorer",
    licensePlate: "BCD-2486",
    driver: {
      name: "James Wilson",
      email: "j.wilson@company.com",
      phone: "(555) 234-5670",
    },
    totalMiles: 19750,
    status: "active",
  },
  {
    id: "v12",
    make: "Toyota",
    model: "Highlander",
    licensePlate: "EFG-3579",
    driver: {
      name: "Lisa Anderson",
      email: "l.anderson@company.com",
      phone: "(555) 345-6781",
    },
    totalMiles: 17230,
    status: "active",
  },
  {
    id: "v13",
    make: "Chevrolet",
    model: "Tahoe",
    licensePlate: "HIJ-4682",
    driver: {
      name: "Daniel Brown",
      email: "d.brown@company.com",
      phone: "(555) 456-7892",
    },
    totalMiles: 15680,
    status: "active",
  },
  {
    id: "v14",
    make: "Honda",
    model: "CR-V",
    licensePlate: "KLM-5793",
    driver: {
      name: "Jennifer Davis",
      email: "j.davis@company.com",
      phone: "(555) 567-8903",
    },
    totalMiles: 12940,
    status: "active",
  },
  {
    id: "v15",
    make: "Ford",
    model: "Escape",
    licensePlate: "NOP-6804",
    driver: {
      name: "William Miller",
      email: "w.miller@company.com",
      phone: "(555) 678-9014",
    },
    totalMiles: 10520,
    status: "active",
  },
  {
    id: "v16",
    make: "Toyota",
    model: "Corolla",
    licensePlate: "QRS-7915",
    driver: {
      name: "Patricia Moore",
      email: "p.moore@company.com",
      phone: "(555) 789-0125",
    },
    totalMiles: 8340,
    status: "active",
  },
  {
    id: "v17",
    make: "Chevrolet",
    model: "Equinox",
    licensePlate: "TUV-8026",
    driver: {
      name: "Richard Taylor",
      email: "r.taylor@company.com",
      phone: "(555) 890-1236",
    },
    totalMiles: 6780,
    status: "active",
  },
  {
    id: "v18",
    make: "Honda",
    model: "Pilot",
    licensePlate: "WXY-9137",
    driver: {
      name: "Linda Jackson",
      email: "l.jackson@company.com",
      phone: "(555) 901-2347",
    },
    totalMiles: 4920,
    status: "active",
  },
  {
    id: "v19",
    make: "BMW",
    model: "330i",
    licensePlate: "ZAB-1248",
    driver: {
      name: "Thomas White",
      email: "t.white@company.com",
      phone: "(555) 012-3458",
    },
    totalMiles: 3450,
    status: "maintenance",
  },
  {
    id: "v20",
    make: "Tesla",
    model: "Model Y",
    licensePlate: "CDE-2359",
    driver: {
      name: "Karen Harris",
      email: "k.harris@company.com",
      phone: "(555) 123-4569",
    },
    totalMiles: 2180,
    status: "inactive",
  },
]

// Generate 30 days of fleet usage data
const generateFleetUsageData = (): FleetUsageData[] => {
  const data: FleetUsageData[] = []
  const today = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Generate realistic daily mileage (800-2500 miles per day)
    // Add some variation with weekends having lower usage
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    const baseUsage = isWeekend ? 1000 : 1800
    const variation = Math.random() * 700
    const totalMiles = Math.round(baseUsage + variation)

    data.push({
      date: date.toISOString().split("T")[0],
      totalMiles,
    })
  }

  return data
}

export const fleetUsageData: FleetUsageData[] = generateFleetUsageData()

export const fleetStats: FleetStats = {
  activeVehicles: 18,
  totalVehicles: 20,
  vehicleChange: 2,
  fuelCosts: 2340,
  fuelChangePercent: 5.2,
  utilizationRate: 67.3,
  utilizationChangePercent: -1.4,
}
