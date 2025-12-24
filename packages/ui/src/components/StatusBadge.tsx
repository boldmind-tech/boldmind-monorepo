interface StatusBadgeProps {
  status: '✅ LIVE' | '🔨 BUILDING' | '📋 PLANNED' | '💡 CONCEPT'
}

const statusColors = {
  '✅ LIVE': 'text-green-400',
  '🔨 BUILDING': 'text-yellow-400',
  '📋 PLANNED': 'text-blue-400',
  '💡 CONCEPT': 'text-purple-400',
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-black/30 ${statusColors[status]}`}>
      {status}
    </span>
  )
}
