"use client"

import React from "react"
import { Badge } from "@/components/Badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { users, roles } from "@/data/data"
import { UserAvatar } from "./UserAvatar"
import { InviteUserDialog } from "./InviteUserDialog"

export function ActiveUsersContent() {
  const [open, setOpen] = React.useState(false)
  const [inviteEmail, setInviteEmail] = React.useState("")
  const [inviteRole, setInviteRole] = React.useState("viewer")

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send an invitation
    console.log("Inviting user:", { email: inviteEmail, role: inviteRole })
    setInviteEmail("")
    setInviteRole("viewer")
    setOpen(false)
  }

  const handleRoleChange = (userEmail: string, newRole: string) => {
    // In a real app, this would update the user's role
    console.log("Updating role for", userEmail, "to", newRole)
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Active Users
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage team members and their roles
          </p>
        </div>
        <InviteUserDialog
          open={open}
          onOpenChange={setOpen}
          inviteEmail={inviteEmail}
          setInviteEmail={setInviteEmail}
          inviteRole={inviteRole}
          setInviteRole={setInviteRole}
          onInvite={handleInvite}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                User
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Role
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
            {users.map((user) => (
              <tr key={user.email}>
                <td className="px-4 py-3 sm:px-6">
                  <div className="flex items-center gap-3">
                    <UserAvatar initials={user.initials} />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                        {user.name}
                      </p>
                      <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 sm:px-6">
                  <Badge
                    variant={user.role === "admin" ? "default" : "neutral"}
                  >
                    {roles.find((r) => r.value === user.role)?.label ||
                      user.role}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-right sm:px-6">
                  <Select
                    defaultValue={user.role}
                    onValueChange={(value) =>
                      handleRoleChange(user.email, value)
                    }
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
