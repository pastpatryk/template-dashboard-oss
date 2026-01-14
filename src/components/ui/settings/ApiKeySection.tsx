"use client"

import React from "react"
import { RiFileCopyLine, RiRefreshLine } from "@remixicon/react"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
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
import { apiKeyInfo } from "@/data/settings-data"

export function ApiKeySection() {
  const [copied, setCopied] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiKeyInfo.maskedKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleRegenerate = () => {
    // In a real app, this would regenerate the API key
    console.log("Regenerating API key...")
    setOpen(false)
  }

  const lastRegenerated = new Date(apiKeyInfo.lastRegenerated).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" },
  )

  return (
    <SettingsSection
      title="API Key"
      description="Manage your API key for programmatic access"
    >
      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            value={apiKeyInfo.maskedKey}
            disabled
            className="flex-1 font-mono"
          />
          <Button variant="secondary" onClick={handleCopy}>
            <RiFileCopyLine className="size-4" />
            <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
          </Button>
        </div>
        <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Last regenerated: {lastRegenerated}
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <RiRefreshLine className="size-4" />
                <span className="ml-2">Regenerate API Key</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Regenerate API Key?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. The current API key will be
                  invalidated immediately and any applications using it will
                  stop working.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" onClick={handleRegenerate}>
                  Regenerate
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </SettingsSection>
  )
}
