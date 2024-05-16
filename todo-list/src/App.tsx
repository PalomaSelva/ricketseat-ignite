import './index.css'
import Rocket from './assets/rocket.svg'
import { useState } from 'react'
import { ListItem } from './components/list/list-item'
import { EmptyList } from './components/list/empty-list'
import { HeaderList } from './components/list/list-header'
import Swal from 'sweetalert2'
import { TasksProps } from './types/task'
import { Field } from './components/field'

function App() {
  const tasksLocalStorage = localStorage.getItem('tasks')
  const [task, setTask] = useState<string>('')
  const [taskList, setTaskList] = useState<TasksProps[]>(
    tasksLocalStorage ? JSON.parse(tasksLocalStorage) : [],
  )

  function handleCheckbox(id: number) {
    const changeCheckboxState = taskList.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked
      }
      return task
    })
    setTaskList(changeCheckboxState)
  }

  function handleAddNewTask() {
    setTaskList((prevTaskList) => {
      const newTask = {
        id: prevTaskList.length + 1,
        label: task,
        checked: false,
      }
      return [...prevTaskList, newTask]
    })
    localStorage.setItem('tasks', JSON.stringify(taskList))
    setTask('')
  }
  function handleRemoveTask(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Não será possível reverter a exclusão',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setTaskList((state) => {
          const currentValue: TasksProps[] = [...state]
          const newTaskList = currentValue.filter((value) => {
            return value.id !== id
          })
          return newTaskList
        })

        localStorage.setItem('tasks', JSON.stringify(taskList))
      }
    })
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
        <Field
          value={task}
          onChange={(e) => setTask(e.target.value)}
          addNewTask={() => handleAddNewTask()}
          task={task}
        />
        <div>
          <HeaderList
            tasksCounter={taskList.length}
            tasksCheckedCounter={taskList.filter((task) => task.checked).length}
          />
          <hr className=" my-5 border-gray-400" />
        </div>
        {taskList && taskList.length > 0 ? (
          taskList.map((task, index) => (
            <ListItem
              key={index}
              item={task}
              handleCheckbox={handleCheckbox}
              removeTask={handleRemoveTask}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  )
}

export default App
