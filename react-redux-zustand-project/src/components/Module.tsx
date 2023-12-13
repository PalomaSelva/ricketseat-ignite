import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'
import * as Collapsible from '@radix-ui/react-collapsible'
interface ModuleProps {
  title: string
  amountOfLessons: number
  moduleIndex: number
}

export function Module({ title, amountOfLessons, moduleIndex }: ModuleProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-4 bg-zinc-800 p-4 ">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-sm text-zinc-400">{amountOfLessons} aulas</span>
        </div>
        <ChevronDown className="w-4 h-4 ml-auto group-data-[state=open]:rotate-180 transition" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Mamma Mia" duration="03:12" />
          <Lesson title="Does Your Mother Know" duration="03:12" />
          <Lesson title="Lay All Your Love On Me" duration="03:12" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
