import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { NewsProvider } from "./news/NewsProvider"
import { EventProvider } from "./events/EventProvider"
import NewsList from "./news/NewsList"
import EventList from "./events/EventList"


export default () => {
    return (
        <>
            <Route exact path="/">

            </Route>

            <NewsProvider>
                <Route exact path="/news">
                    <NewsList />
                </Route>
            </NewsProvider>

            <EventProvider>
                <Route exact path="/events" render={
                    props => <EventList {...props} />
                } />
            </EventProvider>

            <TaskProvider>
                <Route exact path="/tasks">
                </Route>
            </TaskProvider>
        </>
    )
}