import './index.css'
import Rocket from './assets/rocket.svg'

import { LucidePlusCircle } from 'lucide-react'
import { useState } from 'react'
import { ListItem } from './components/list/list-item'
import { EmptyList } from './components/list/empty-list'
import { HeaderList } from './components/list/list-header'

function App() {
  const tasksLocalStorage = localStorage.getItem('tasks')
  const [task, setTask] = useState<string>('')
  const [listaTasks, setListaTasks] = useState<string[]>(
    tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [],
  )
  const [tasksCompletas, setTasksCompletas] = useState<boolean[]>([])

  function handleCheckbox(index: number) {
    const newTasksCompletas = [...tasksCompletas]
    newTasksCompletas[index] = !newTasksCompletas[index]
    setTasksCompletas(newTasksCompletas)
    console.log(tasksCompletas)
  }

  function handleAddNewTask() {
    const tasks = [...listaTasks, task]
    setListaTasks(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setTask('')
  }
  function handleRemoveTask(index: number) {
    setListaTasks((state) => {
      const newState = [...state]
      newState.splice(index, 1) // retorna os itens removidos
      return newState // vai retornar o array modificado, sem ositens removidos
    })

    setTasksCompletas((state) => {
      const newState = [...state]
      newState.splice(index, 1)
      return newState
    })
    localStorage.setItem('tasks', JSON.stringify(task))
  }

  return (
    <div className="before:block before:bg-gray-700 before:h-[200px] h-screen  bg-gray-600">
      <div className="md:w-[736px] m-auto -mt-32">
        <div className="flex justify-center gap-3">
          <Rocket />
          <h1 className="text-blue-400 font-extrabold text-4xl">
            to<span className="text-blue-700">do</span>
          </h1>
        </div>
        <div className="mt-12 flex gap-3 justify-center">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Adicione uma nova task"
            className="border text-gray-100 flex-1 focus:outline-purple-700 placeholder:text-gray-300 border-gray-700 bg-gray-500 p-4 rounded-lg border-solid"
          />
          <button
            onClick={() => handleAddNewTask()}
            disabled={task === ''}
            className="flex disabled:bg-slate-500 font-semibold text-gray-100 justify-center items-center gap-2 bg-blue-700 p-4 rounded-lg"
          >
            Criar
            <LucidePlusCircle />
          </button>
        </div>
        <div>
          <HeaderList
            tasksCounter={listaTasks.length}
            tasksCheckedCounter={
              tasksCompletas.filter((task) => task === true).length
            }
          />
          <hr className=" my-5 border-gray-400" />
        </div>
        {listaTasks && listaTasks.length > 0 ? (
          <ListItem
            items={listaTasks}
            tasksCompletas={tasksCompletas}
            handleCheckbox={handleCheckbox}
            removeTask={handleRemoveTask}
          />
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  )
}

export default App
