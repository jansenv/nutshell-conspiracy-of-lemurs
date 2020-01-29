import React from "react"
import { Route } from "react-router-dom"
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

                  <Route exact path="/tasks">

                  </Route>


        </>
    )
}