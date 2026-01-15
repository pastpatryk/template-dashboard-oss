import { Badge } from "@/components/Badge"
import { Vehicle } from "@/data/schema"

interface VehicleListTableProps {
  vehicles: Vehicle[]
}

export function VehicleListTable({ vehicles }: VehicleListTableProps) {
  const getStatusVariant = (
    status: Vehicle["status"],
  ): "success" | "warning" | "neutral" => {
    switch (status) {
      case "active":
        return "success"
      case "maintenance":
        return "warning"
      case "inactive":
        return "neutral"
    }
  }

  const getStatusLabel = (status: Vehicle["status"]): string => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Vehicle Fleet
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Complete list of vehicles sorted by most used
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6 dark:text-gray-400">
                Vehicle
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6 dark:text-gray-400">
                License Plate
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6 dark:text-gray-400">
                Driver
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6 dark:text-gray-400">
                Total Miles
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6 dark:text-gray-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="px-4 py-3 sm:px-6">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                      {vehicle.make} {vehicle.model}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3 sm:px-6">
                  <p className="text-sm text-gray-900 dark:text-gray-50">
                    {vehicle.licensePlate}
                  </p>
                </td>
                <td className="px-4 py-3 sm:px-6">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                      {vehicle.driver.name}
                    </p>
                    <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                      {vehicle.driver.email}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-3 text-right sm:px-6">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {vehicle.totalMiles.toLocaleString()} mi
                  </p>
                </td>
                <td className="px-4 py-3 text-right sm:px-6">
                  <Badge variant={getStatusVariant(vehicle.status)}>
                    {getStatusLabel(vehicle.status)}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
