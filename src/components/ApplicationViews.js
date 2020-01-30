import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { NewsProvider } from "./news/NewsProvider"
import TaskForm from "./tasks/TaskForm"
import TaskList from "./tasks/TaskList"


export default (props) => {
    return (
        <>
                  <Route exact path="/">

                  </Route>

          <NewsProvider>
                  <Route exact path="/news">

                  </Route>
          </NewsProvider>

                  <Route exact path="/events">

                  </Route>


                  <TaskProvider>   
                  <Route exact path="/tasks" render={
                      props=><TaskList {...props}/>
                  }/>
                  <Route exact path="/tasks/create" render={
                      props=><TaskForm {...props}/>
                  }/>
                  <Route exact path="/tasks/edit/:taskId(\d+)" render={
                      props=><TaskForm {...props}/>
                  }/>
                  
                      
                  
                    </TaskProvider>


        </>
    )
}