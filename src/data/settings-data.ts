// Workspace info
export const workspaceInfo = {
  name: "Acme Corp",
  description: "Main production workspace for Acme Corporation analytics",
}

// API Key
export const apiKeyInfo = {
  maskedKey: "sk-****************************1234",
  lastRegenerated: "2024-01-15T10:30:00Z",
}

// Billing plans
export type Plan = {
  value: string
  label: string
  price: string
  features: string[]
  isRecommended: boolean
  isCurrent: boolean
}

export const plans: Plan[] = [
  {
    value: "free",
    label: "Free",
    price: "$0/month",
    features: ["5,000 API calls", "1 GB storage", "3 team members"],
    isRecommended: false,
    isCurrent: false,
  },
  {
    value: "pro",
    label: "Pro",
    price: "$29/month",
    features: [
      "100,000 API calls",
      "10 GB storage",
      "10 team members",
      "Priority support",
    ],
    isRecommended: true,
    isCurrent: true,
  },
  {
    value: "enterprise",
    label: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited API calls",
      "Unlimited storage",
      "Unlimited members",
      "24/7 support",
      "SLA",
    ],
    isRecommended: false,
    isCurrent: false,
  },
]

// Billing usage
export type UsageEntry = {
  title: string
  percentage: number
  current: number
  allowed: number
  unit?: string
}

export const billingUsage: UsageEntry[] = [
  { title: "API Calls", percentage: 65, current: 65000, allowed: 100000 },
  { title: "Storage", percentage: 40, current: 4, allowed: 10, unit: "GB" },
  { title: "Team members", percentage: 60, current: 6, allowed: 10 },
]

// Current plan
export const currentPlan = {
  name: "Pro",
  price: "$29/month",
  billingCycle: "monthly",
  status: "active",
  nextBillingDate: "2024-02-15",
}
