import { AddToDo } from "./components/addToDoList";
import { ToDoList } from "./components/toDoList";
import {Provider as ReduxProvider} from 'react-redux'
import { store } from "./store";
export function App() {
  return (
    <ReduxProvider store={store}>
      <ToDoList/>
      <AddToDo/>
    </ReduxProvider>
  )
}
