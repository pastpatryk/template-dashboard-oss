import { Badge } from "@/components/Badge"
import { FleetStats } from "@/data/schema"
import { RiArrowUpLine, RiArrowDownLine } from "@remixicon/react"

interface FleetStatsCardsProps extends FleetStats {}

export function FleetStatsCards({
  activeVehicles,
  totalVehicles,
  vehicleChange,
  fuelCosts,
  fuelChangePercent,
  utilizationRate,
  utilizationChangePercent,
}: FleetStatsCardsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercent = (value: number) => {
    return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`
  }

  const getTrendVariant = (value: number): "success" | "error" | "neutral" => {
    if (value > 0) return "success"
    if (value < 0) return "error"
    return "neutral"
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Active Vehicles Card */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-between">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Active Vehicles
          </dt>
          <Badge variant={getTrendVariant(vehicleChange)}>
            {vehicleChange > 0 ? (
              <RiArrowUpLine className="size-3" />
            ) : vehicleChange < 0 ? (
              <RiArrowDownLine className="size-3" />
            ) : null}
            {vehicleChange > 0 ? "+" : ""}
            {vehicleChange}
          </Badge>
        </div>
        <dd className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            {activeVehicles}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            / {totalVehicles}
          </span>
        </dd>
      </div>

      {/* Fuel/Energy Costs Card */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-between">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Fuel/Energy Costs
          </dt>
          <Badge variant={getTrendVariant(fuelChangePercent)}>
            {fuelChangePercent > 0 ? (
              <RiArrowUpLine className="size-3" />
            ) : fuelChangePercent < 0 ? (
              <RiArrowDownLine className="size-3" />
            ) : null}
            {formatPercent(fuelChangePercent)}
          </Badge>
        </div>
        <dd className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            {formatCurrency(fuelCosts)}
          </span>
        </dd>
      </div>

      {/* Utilization Rate Card */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-between">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Utilization Rate
          </dt>
          <Badge variant={getTrendVariant(utilizationChangePercent)}>
            {utilizationChangePercent > 0 ? (
              <RiArrowUpLine className="size-3" />
            ) : utilizationChangePercent < 0 ? (
              <RiArrowDownLine className="size-3" />
            ) : null}
            {formatPercent(utilizationChangePercent)}
          </Badge>
        </div>
        <dd className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            {utilizationRate.toFixed(1)}%
          </span>
        </dd>
      </div>
    </div>
  )
}
