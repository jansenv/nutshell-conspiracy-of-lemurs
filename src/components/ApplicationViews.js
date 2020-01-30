import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { NewsProvider } from "./news/NewsProvider"
import TaskForm from "./tasks/TaskForm"
import TaskList from "./tasks/TaskList"
import { EventProvider } from "./events/EventProvider"
import EventList from "./events/EventList"


export default (props) => {
    return (
        <>
            <Route exact path="/">

            </Route>

            <NewsProvider>
                <Route exact path="/news">

                </Route>
            </NewsProvider>

            <EventProvider>
                <Route exact path="/events">
                    <EventList />
                </Route>
            </EventProvider>



            <TaskProvider>
                <Route exact path="/tasks" render={
                    props => <TaskList {...props} />
                } />
                <Route exact path="/tasks/create" render={
                    props => <TaskForm {...props} />
                } />
                <Route exact path="/tasks/edit/:taskId(\d+)" render={
                    props => <TaskForm {...props} />
                } />
            </TaskProvider>


        </>
    )
}