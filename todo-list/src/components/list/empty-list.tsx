import { ClipboardList } from 'lucide-react'

export function EmptyList() {
  return (
    <div className="text-gray-300 leading-[140%] flex flex-col gap-4 items-center w-full pt-9">
      <ClipboardList size={46} strokeWidth={1.5} />
      <div className="text-center">
        <h3 className="text-lg font-bold leading-relaxed">
          Você ainda não tem tarefas cadastradas
        </h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
