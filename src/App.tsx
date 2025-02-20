import './App.css'
import { TaskType, TodolistItem } from './TodolistItem'

export const App = () => {

  const todolistTitle: string = "What to llllearn"
  const todolistTitle2: string = "What to eat"
  const todolistTitle3: string = "What to sleep"

  const todolistTasks: Array<TaskType> = [
    { id: 1, title: "Html&CSS", isDone: true },
    { id: 1, title: "Html&CSS", isDone: true },
    { id: 1, title: "Html&CSS", isDone: true }
  ]





  return (
    <div className="app">
      <TodolistItem title={todolistTitle} tasks={todolistTasks} />
      <TodolistItem title={todolistTitle2} tasks={todolistTasks} />
      <TodolistItem title={todolistTitle3} tasks={todolistTasks} />

    </div>
  )
}

