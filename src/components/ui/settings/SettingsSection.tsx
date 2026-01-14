import React from "react"

type SettingsSectionProps = {
  title: string
  description?: string
  children: React.ReactNode
}

export function SettingsSection({
  title,
  description,
  children,
}: SettingsSectionProps) {
  const id = React.useId()

  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="text-lg font-semibold text-gray-900 dark:text-gray-50 sm:text-xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
      <div className="mt-4 sm:mt-6">{children}</div>
    </section>
  )
}
