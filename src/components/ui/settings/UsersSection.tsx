"use client"

import React from "react"
import { RiAddLine, RiDeleteBinLine } from "@remixicon/react"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog"
import { SettingsSection } from "./SettingsSection"
import { users, invitedUsers, roles } from "@/data/data"

export function UsersSection() {
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

  const handleRevoke = (email: string) => {
    // In a real app, this would revoke the invitation
    console.log("Revoking invitation for", email)
  }

  return (
    <SettingsSection
      title="Users Management"
      description="Manage team members and their permissions"
    >
      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        {/* Users Table */}
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
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                        {user.initials}
                      </div>
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

        {/* Pending Invites */}
        <div className="border-t border-gray-200 p-4 dark:border-gray-800 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Pending Invites
            </h3>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>
                  <RiAddLine className="size-4" />
                  <span className="ml-2">Invite user</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <form onSubmit={handleInvite}>
                  <DialogHeader>
                    <DialogTitle>Invite a new user</DialogTitle>
                    <DialogDescription>
                      Send an invitation email to add a new team member.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="invite-email" className="font-medium">
                        Email address
                      </Label>
                      <Input
                        id="invite-email"
                        type="email"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        placeholder="colleague@company.com"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="invite-role" className="font-medium">
                        Role
                      </Label>
                      <Select value={inviteRole} onValueChange={setInviteRole}>
                        <SelectTrigger className="mt-2" id="invite-role">
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
                    </div>
                  </div>
                  <DialogFooter className="mt-6">
                    <DialogClose asChild>
                      <Button variant="secondary" type="button">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit">Send invitation</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {invitedUsers.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {invitedUsers.map((invite) => (
                <li
                  key={invite.email}
                  className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-gray-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                      {invite.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm text-gray-900 dark:text-gray-50">
                        {invite.email}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Expires in {invite.expires} days
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => handleRevoke(invite.email)}
                  >
                    <RiDeleteBinLine className="size-4" />
                    <span className="ml-2">Revoke</span>
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              No pending invitations
            </p>
          )}
        </div>
      </div>
    </SettingsSection>
  )
}
