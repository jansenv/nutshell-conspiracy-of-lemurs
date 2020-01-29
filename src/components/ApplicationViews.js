import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { NewsProvider } from "./news/NewsProvider"


export default () => {
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
                  <Route exact path="/tasks">
                  </Route>
                    </TaskProvider>


        </>
    )
}