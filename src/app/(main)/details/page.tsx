"use client"

import { LineChart } from "@/components/LineChart"
import { fleetDailyUsage } from "@/data/fleet-data"
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
    </>
  )
}
