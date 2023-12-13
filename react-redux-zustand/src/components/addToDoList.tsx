import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store'
export function AddToDo() {
  const [newToDo, setNewToDo] = useState('')
  const dispatch = useDispatch()
  function handleNewToDo(e: FormEvent) {
    e.preventDefault()
    console.log(newToDo)
    dispatch(add(newToDo))
    setNewToDo('')
  }
  return (
    <form onSubmit={handleNewToDo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
