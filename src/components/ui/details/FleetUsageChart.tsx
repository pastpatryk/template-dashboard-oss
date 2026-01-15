"use client"

import { LineChart } from "@/components/LineChart"
import { FleetUsageData } from "@/data/schema"
import { formatDate } from "date-fns"

interface FleetUsageChartProps {
  data: FleetUsageData[]
}

export function FleetUsageChart({ data }: FleetUsageChartProps) {
  const chartData = data.map((item) => ({
    date: formatDate(new Date(item.date), "MM/dd/yyyy"),
    "Total Miles": item.totalMiles,
  }))

  const totalMiles = data.reduce((sum, item) => sum + item.totalMiles, 0)
  const avgMilesPerDay = Math.round(totalMiles / data.length)

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Daily Fleet Mileage
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Total miles driven across all vehicles over the last 30 days
        </p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            {totalMiles.toLocaleString()} mi
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            total ({avgMilesPerDay.toLocaleString()} mi/day avg)
          </span>
        </div>
      </div>
      <LineChart
        className="h-80"
        data={chartData}
        index="date"
        categories={["Total Miles"]}
        colors={["indigo"]}
        valueFormatter={(value) => `${value.toLocaleString()} mi`}
        showLegend={false}
        yAxisWidth={60}
      />
    </div>
  )
}
