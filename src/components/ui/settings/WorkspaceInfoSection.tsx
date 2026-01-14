"use client"

import React from "react"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { SettingsSection } from "./SettingsSection"
import { workspaceInfo } from "@/data/settings-data"

export function WorkspaceInfoSection() {
  const [name, setName] = React.useState(workspaceInfo.name)
  const [description, setDescription] = React.useState(
    workspaceInfo.description,
  )

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log("Saving workspace info:", { name, description })
  }

  return (
    <SettingsSection
      title="Workspace Information"
      description="Update your workspace name and description"
    >
      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="workspace-name" className="font-medium">
              Workspace name
            </Label>
            <Input
              id="workspace-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Workspace"
              className="mt-2"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="workspace-description" className="font-medium">
              Description
            </Label>
            <Input
              id="workspace-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description..."
              className="mt-2"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={handleSave}>Save changes</Button>
        </div>
      </div>
    </SettingsSection>
  )
}
