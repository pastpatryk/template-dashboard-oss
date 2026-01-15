import { TremorPlaceholder } from "@/components/ui/icons/TremorPlaceholder"
import { FleetStatsCards } from "@/components/ui/details/FleetStatsCards"
import { FleetUsageChart } from "@/components/ui/details/FleetUsageChart"
import { fleetStats, fleetUsageData } from "@/data/fleet-data"

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

      {/* Placeholder for Vehicle List */}
      <div className="mt-8 sm:mt-10">
        <div className="my-20 flex w-full flex-col items-center justify-center">
          <TremorPlaceholder className="size-20 shrink-0" aria-hidden="true" />
          <h2 className="mt-6 text-lg font-semibold sm:text-xl">
            Vehicle list coming soon
          </h2>
          <p className="mt-3 max-w-md text-center text-gray-500">
            Phase 4 will add the vehicle list table.
          </p>
        </div>
      </div>
    </>
  )
}
