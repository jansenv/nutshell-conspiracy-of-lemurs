//Authored by Willy

import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import Task from "./Task"
import "./Task.css"

export default (props) =>{
  const { tasks } = useContext(TaskContext)
const yourTasks = tasks.filter(task => task.userId === parseInt(localStorage.getItem("activeUser")))
const completedTasks = yourTasks.filter(task=>task.isCompleted === true)
const tasksToDo = yourTasks.filter(task=>task.isCompleted !==true)
 return (
     <>
    <div className="tasks">
       
        <h1>Tasks</h1>
        <button onClick={() => props.history.push("/tasks/create")}>
            Add Task
        </button>

        </div>
        <div className="allTheTasks">

        <h2>Your Tasks</h2>
        <article className="taskList">
            {tasksToDo.map(tas => <Task key={tas.id} task={tas} {...props} />)}
        </article>

        <h2>Your Completed Tasks</h2>
        <article className="taskList">
            {completedTasks.map(tas => <Task key={tas.id} task={tas} {...props} />)}
        </article>

    </div>
    </>
)
}
