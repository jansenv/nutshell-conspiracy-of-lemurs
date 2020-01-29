import React from "react"
import { Route } from "react-router-dom"
<<<<<<< HEAD
import { TaskProvider } from "./tasks/TaskProvider"
=======
import { NewsProvider } from "./news/NewsProvider"

>>>>>>> master

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