// authored by willy

import React, { useState, useEffect } from "react"

export const TaskContext = React.createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
            .then(res => res.json())
            .then(setTasks)
    }

    const addTask = Task => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Task)
        })
            .then(getTasks)
    }
    const releaseTask = Task => {
      return fetch(`http://localhost:8088/tasks/${Task.id}`, {
          method: "DELETE"
      })
          .then(getTasks)
  }
  const updateTask = Task => {
    return fetch(`http://localhost:8088/tasks/${Task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Task)
    })
        .then(getTasks)
  }
  const patchTask = Task => {
    return fetch(`http://localhost:8088/tasks/${Task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Task)
    })
        .then(getTasks)
  }
 
    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        console.log("****  Task APPLICATION STATE CHANGED  ****")
    }, [tasks])


    return (
        <TaskContext.Provider value={{
            tasks, addTask, patchTask, updateTask, releaseTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}