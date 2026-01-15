"use client"

import { RiDeleteBinLine } from "@remixicon/react"
import { Button } from "@/components/Button"
import { invitedUsers } from "@/data/data"
import { UserAvatar } from "./UserAvatar"

export function PendingInvitesContent() {
  const handleRevoke = (email: string) => {
    // In a real app, this would revoke the invitation
    console.log("Revoking invitation for", email)
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Pending Invites
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage pending user invitations
        </p>
      </div>

      {invitedUsers.length > 0 ? (
        <ul className="space-y-2">
          {invitedUsers.map((invite) => (
            <li
              key={invite.email}
              className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-gray-800"
            >
              <div className="flex items-center gap-3">
                <UserAvatar initials={invite.initials} />
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
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No pending invitations
        </p>
      )}
    </div>
  )
}
