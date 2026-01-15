import { FleetStatsCards } from "@/components/ui/details/FleetStatsCards"
import { FleetUsageChart } from "@/components/ui/details/FleetUsageChart"
import { VehicleListTable } from "@/components/ui/details/VehicleListTable"
import { fleetStats, fleetUsageData, vehicles } from "@/data/fleet-data"

export default function DetailsPage() {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Fleet Vehicle Usage
      </h1>

      {/* Stats Section */}
      <div className="mt-4 sm:mt-6">
        <FleetStatsCards {...fleetStats} />
      </div>

      {/* Chart Section */}
      <section className="mt-8 sm:mt-10">
        <FleetUsageChart data={fleetUsageData} />
      </section>

      {/* Vehicle List Section */}
      <section className="mt-8 sm:mt-10">
        <VehicleListTable vehicles={vehicles} />
      </section>
    </>
  )
}
