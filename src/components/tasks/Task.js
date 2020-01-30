//Authored by Willy
import React, { useContext } from "react"
import "./Task.css"
import { TaskContext } from "./TaskProvider"

export default ({ task, history }) => {
    const { deleteTask } = useContext(TaskContext)


return (
    
    <section className="task">

        <div>{task.name}</div>
        <div>{task.task}</div>
        <div>Due: {task.dueDate}</div>
        <label>Completed?</label>
        <input type="checkbox" className={task.id}></input>
<button onClick={() => {
                history.push(`/tasks/edit/${task.id}`)
            }}>Edit</button>

           
        <button className="deleteTaskButton" onClick={()=>{

            deleteTask(task).then(()=> history.push("/tasks"))
        }
        }>Delete</button>
    </section>
)

    }