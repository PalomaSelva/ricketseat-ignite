import { useAppSelector } from '../store'

export function ToDoList() {
  const toDo = useAppSelector((store) => {
    return store.todo
  })
  console.log(toDo)
  return (
    <ul>
      {toDo.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
}
