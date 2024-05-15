import { Check, Trash2 } from 'lucide-react'

interface listItemsProps {
  items: string[]
  tasksCompletas: boolean[]
  handleCheckbox: (index: number) => void
  removeTask: (index: number) => void
}

export function ListItem({
  items,
  removeTask,
  handleCheckbox,
  tasksCompletas,
}: listItemsProps) {
  return (
    <>
      {items.map((task, index) => (
        <div
          key={index}
          className="border mb-3 flex justify-between border-gray-400 bg-gray-500 shadow p-4 rounded-lg border-solid"
        >
          <input
            type="checkbox"
            id={`contactChoice${index}`} // Adicionando o índice ao id
            name={`contactChoice${index}`} // Atualizando o nome para corresponder ao id
            value="email"
            className="sr-only"
            onChange={() => handleCheckbox(index)}
            checked={tasksCompletas[index]}
          />
          <label
            htmlFor={`contactChoice${index}`}
            className={`cursor-pointer flex flex-1 items-start gap-2 text-gray-200 ${tasksCompletas[index] && 'line-through  text-gray-300'}`}
          >
            <div
              className={`border-2 grid place-items-center rounded-full border-blue-400 ${tasksCompletas[index] && 'bg-purple-700'}  w-5 h-5 mt-[2px]`}
            >
              {tasksCompletas[index] && (
                <Check size={14} strokeWidth={3} className="text-gray-200" />
              )}
            </div>
            {task}
          </label>
          <button onClick={() => removeTask(index)}>
            <Trash2 className="text-gray-300" strokeWidth={1.5} width={22} />
          </button>
        </div>
      ))}
    </>
  )
}
