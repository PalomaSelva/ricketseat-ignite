import { PlayCircle, Video } from 'lucide-react'
interface LessonProps {
  title: string
  duration: string
  onPlay: () => void
  isCurrent?: boolean
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-300"
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 data-[active=true]:text-emerald-400" />
      ) : (
        <Video className="w-4 h-4" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-sm">{duration}</span>
    </button>
  )
}
