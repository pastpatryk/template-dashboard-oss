interface UserAvatarProps {
  initials: string
}

export function UserAvatar({ initials }: UserAvatarProps) {
  return (
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
      {initials}
    </div>
  )
}
