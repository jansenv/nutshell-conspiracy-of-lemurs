//Authored by Willy
import React, { useContext} from "react"
import "./Task.css"
import { TaskContext } from "./TaskProvider"

export default ({ task, history }) => {
    const { deleteTask, patchTask } = useContext(TaskContext)


const checkbox = ()=>{
    let checkboxValue = true
    if(task.isCompleted === true){
        return <>
        <input type="checkbox" name="checkbox" onChange={()=>{
            checkboxValue = false
            const patchedTask= {
                isCompleted:checkboxValue,
                id: task.id
            }
            patchTask(patchedTask).then(()=> history.push("/tasks"))
        }} checked></input>
        
        </>
    }else{
        checkboxValue = true
        
        return <>
        <input type="checkbox" name="checkbox" onChange={()=>{
            const patchedTask= {
                isCompleted:checkboxValue,
                id: task.id
            }
            patchTask(patchedTask).then(()=> history.push("/tasks"))
        }}></input>
        <button onClick={() => {
            history.push(`/tasks/edit/${task.id}`)
        }}>Edit</button>
        </>
    }
}

return (
    
    <section className="task">

        <div>{task.name}</div>
        <div>{task.task}</div>
        <div>Due: {task.dueDate}</div>
        <label>Completed?</label>
        {checkbox()}
        





           
        <button className="deleteTaskButton" onClick={()=>{

            deleteTask(task).then(()=> history.push("/tasks"))
        }
        }>Delete</button>
    </section>
)

    }