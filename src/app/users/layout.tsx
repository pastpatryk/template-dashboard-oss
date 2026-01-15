import { TabNavigation } from "@/components/ui/users/TabNavigation"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7">
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Users
      </h1>
      <div className="mt-4 sm:mt-6">
        <TabNavigation />
      </div>
      <div className="mt-4 sm:mt-6">{children}</div>
    </div>
  )
}
