import { redirect } from "next/navigation"
import { siteConfig } from "@/app/siteConfig"

export default function UsersPage() {
  redirect(siteConfig.usersLinks.active)
}
