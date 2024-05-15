import { Header } from '../components/Header'
import { VideoPlayer } from '../components/Video'
import { Module } from '../components/Module'
import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/player'
import { useEffect } from 'react'
export function Player() {
  const modules = useAppSelector((state) => {
    return state.player.courses.modules
  })
  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    document.title = `Assistindo: ${currentLesson.title}`
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center py-7">
      <div className="flex w-[80rem] flex-col gap-6 p-6">
        <Header />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1 pr-72">
            <VideoPlayer />
          </div>
          <aside className="absolute top-0 bottom-0 right-0 w-72 border-l border-zinc-800 divide-y-2 divide-zinc-900 bg-zinc-900 overflow-y-auto scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700">
            {modules.map((modulo, index) => {
              return (
                <Module
                  key={modulo.id}
                  title={modulo.title}
                  moduleIndex={index}
                  amountOfLessons={modulo.lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}
