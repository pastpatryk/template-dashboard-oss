"use client"

import React from "react"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { ProgressBar } from "@/components/ProgressBar"
import {
  RadioCardGroup,
  RadioCardItem,
  RadioCardIndicator,
} from "@/components/RadioCard"
import { SettingsSection } from "./SettingsSection"
import { billingUsage, currentPlan, plans } from "@/data/settings-data"
import { cx } from "@/lib/utils"

export function BillingSection() {
  const [selectedPlan, setSelectedPlan] = React.useState(
    plans.find((p) => p.isCurrent)?.value || "pro",
  )

  const handleUpgrade = () => {
    // In a real app, this would initiate the upgrade flow
    console.log("Upgrading to:", selectedPlan)
  }

  const nextBillingDate = new Date(currentPlan.nextBillingDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  )

  return (
    <SettingsSection
      title="Billing & Plans"
      description="Manage your subscription and view usage"
    >
      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
        {/* Current Plan */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-50">
              {currentPlan.name} Plan
            </span>
            <Badge variant="success">{currentPlan.status}</Badge>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {currentPlan.price} - Billed {currentPlan.billingCycle}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Next billing date: {nextBillingDate}
          </p>
        </div>

        {/* Usage Metrics */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Current Usage
          </h3>
          <div className="mt-3 space-y-4">
            {billingUsage.map((usage) => (
              <div key={usage.title}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {usage.title}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {usage.current.toLocaleString()}
                    {usage.unit ? ` ${usage.unit}` : ""} /{" "}
                    {usage.allowed.toLocaleString()}
                    {usage.unit ? ` ${usage.unit}` : ""}
                  </span>
                </div>
                <ProgressBar
                  value={usage.percentage}
                  variant={
                    usage.percentage >= 90
                      ? "error"
                      : usage.percentage >= 75
                        ? "warning"
                        : "default"
                  }
                  className="mt-2 h-1.5"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Plan Selection */}
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Available Plans
          </h3>
          <RadioCardGroup
            value={selectedPlan}
            onValueChange={setSelectedPlan}
            className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {plans.map((plan) => (
              <RadioCardItem
                key={plan.value}
                value={plan.value}
                className={cx(
                  "relative cursor-pointer",
                  plan.isCurrent && "ring-2 ring-indigo-600 dark:ring-indigo-500",
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 dark:text-gray-50">
                        {plan.label}
                      </span>
                      {plan.isRecommended && (
                        <Badge variant="default">Recommended</Badge>
                      )}
                      {plan.isCurrent && (
                        <Badge variant="neutral">Current</Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-50">
                      {plan.price}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-xs text-gray-600 dark:text-gray-400"
                        >
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <RadioCardIndicator />
                </div>
              </RadioCardItem>
            ))}
          </RadioCardGroup>
        </div>

        {/* Upgrade Button */}
        {selectedPlan !== plans.find((p) => p.isCurrent)?.value && (
          <div className="mt-6 flex justify-end">
            <Button onClick={handleUpgrade}>
              {selectedPlan === "free" ? "Downgrade to Free" : "Upgrade Plan"}
            </Button>
          </div>
        )}
      </div>
    </SettingsSection>
  )
}
