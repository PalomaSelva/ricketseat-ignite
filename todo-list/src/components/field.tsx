import { LucidePlusCircle } from 'lucide-react'

interface FieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  addNewTask: () => void
  task: string
}

export function Field({ addNewTask, task, ...rest }: FieldProps) {
  return (
    <div className="mt-12 flex gap-3 justify-center">
      <input
        type="text"
        {...rest}
        placeholder="Adicione uma nova task"
        className="border text-gray-100 flex-1 focus:outline-purple-700 placeholder:text-gray-300 border-gray-700 bg-gray-500 p-4 rounded-lg border-solid"
      />
      <button
        onClick={addNewTask}
        disabled={task === ''}
        className="flex disabled:bg-slate-500 font-semibold text-gray-100 justify-center items-center gap-2 bg-blue-700 p-4 rounded-lg"
      >
        Criar
        <LucidePlusCircle />
      </button>
    </div>
  )
}
