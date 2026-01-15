"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/app/siteConfig"
import { cx, focusRing } from "@/lib/utils"

const tabs = [
  { name: "Active Users", href: siteConfig.usersLinks.active },
  { name: "Pending Invites", href: siteConfig.usersLinks.invites },
]

export function TabNavigation() {
  const pathname = usePathname()

  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={cx(
              pathname === tab.href
                ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
              "border-b-2 px-1 py-4 text-sm font-medium transition",
              focusRing,
            )}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
