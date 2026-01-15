"use client"

import { LineChart } from "@/components/LineChart"
import { cars, fleetDailyUsage } from "@/data/fleet-data"
import { format } from "date-fns"

const chartData = fleetDailyUsage.map((item) => ({
  ...item,
  formattedDate: format(new Date(item.date), "dd/MM"),
}))

const valueFormatter = (value: number) => {
  return new Intl.NumberFormat("en-US").format(value) + " km"
}

export default function Details() {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Fleet Details
      </h1>
      <section className="mt-4 sm:mt-6 lg:mt-10">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-50">
          Daily Fleet Usage (Last 30 Days)
        </h2>
        <div className="mt-4">
          <LineChart
            data={chartData}
            index="formattedDate"
            categories={["Distance (km)"]}
            colors={["indigo"]}
            valueFormatter={valueFormatter}
            className="h-72"
            showLegend={false}
          />
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-50">
          Fleet Vehicles
        </h2>
        <div className="mt-4 rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                    Model
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                    License Plate
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                    Assigned Driver
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                {cars.map((car) => (
                  <tr key={car.id}>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-50 sm:px-6">
                      {car.model}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-50 sm:px-6">
                      {car.licensePlate}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-50 sm:px-6">
                      {car.assignedDriver}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
