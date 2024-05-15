interface HeaderListProps {
  tasksCounter: number
  tasksCheckedCounter: number
}

export function HeaderList({
  tasksCounter,
  tasksCheckedCounter,
}: HeaderListProps) {
  return (
    <div className=" mt-14 flex font-bold justify-between ">
      <div className="text-blue-400">
        Tasks criadas
        <span className="ml-1 px-2 text-gray-200 bg-gray-400 py-0.5 rounded-full">
          {tasksCounter}
        </span>
      </div>
      <div className="text-blue-400">
        Concluídas
        <span className="ml-1 px-2 text-gray-200 bg-gray-400 py-0.5 rounded-full">
          {tasksCheckedCounter}
        </span>
      </div>
    </div>
  )
}
