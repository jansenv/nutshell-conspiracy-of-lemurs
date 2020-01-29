import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"

export default () => {
    return (
        <>
                  <Route exact path="/">

                  </Route>

                  <Route exact path="/news">

                  </Route>

                  <Route exact path="/events">

                  </Route>


                  <TaskProvider>   
                  <Route exact path="/tasks">
                  </Route>
                    </TaskProvider>


        </>
    )
}