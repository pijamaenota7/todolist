import { Button } from "./Button"


type TodolistItemType = {
    title: string
    tasks: TaskType[]
}


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


export const TodolistItem = ({ title, tasks }: TodolistItemType) => {

    const listItems = tasks.map((task: TaskType) => {
        return (
            <li>
                <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
            </li>
        )
    })


    const tasksList = (tasks.length === 0)
        ? <span>Ваш список пуст</span>
        : <u>
            {listItems}
        </u>


    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input />
                <Button title={'+'} />
            </div>

            {tasksList}


            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
            </div>
        </div>
    )
}