import { WorkspaceInfoSection } from "@/components/ui/settings/WorkspaceInfoSection"
import { ApiKeySection } from "@/components/ui/settings/ApiKeySection"
import { BillingSection } from "@/components/ui/settings/BillingSection"

export default function Settings() {
  return (
    <div className="mt-4 space-y-14 sm:mt-6 lg:mt-10">
      <WorkspaceInfoSection />
      <ApiKeySection />
      <BillingSection />
    </div>
  )
}
