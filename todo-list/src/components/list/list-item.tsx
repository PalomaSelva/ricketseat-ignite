import { Check, Trash2 } from 'lucide-react'
import { TasksProps } from '../../types/task'

interface listItemsProps {
  item: TasksProps
  handleCheckbox: (index: number) => void
  removeTask: (index: number) => void
}

export function ListItem({ item, removeTask, handleCheckbox }: listItemsProps) {
  return (
    <div className="border mb-3 flex justify-between border-gray-400 bg-gray-500 shadow p-4 rounded-lg border-solid">
      <input
        type="checkbox"
        id={`contactChoice${item.id}`} // Adicionando o índice ao id
        name={`contactChoice${item.id}`} // Atualizando o nome para corresponder ao id
        value="email"
        className="sr-only"
        onChange={() => handleCheckbox(item.id)}
        checked={item.checked}
      />
      <label
        htmlFor={`contactChoice${item.id}`}
        className={`cursor-pointer flex flex-1 items-start gap-2 text-gray-200 ${item.checked && 'line-through  text-gray-300'}`}
      >
        <div
          className={`border-2 grid place-items-center rounded-full border-blue-400 ${item.checked && 'bg-purple-700'}  w-5 h-5 mt-[2px]`}
        >
          {item.checked && (
            <Check size={14} strokeWidth={3} className="text-gray-200" />
          )}
        </div>
        {item.label}
      </label>
      <button onClick={() => removeTask(item.id)}>
        <Trash2 className="text-gray-300" strokeWidth={1.5} width={22} />
      </button>
    </div>
  )
}
