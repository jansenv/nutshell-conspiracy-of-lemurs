import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { NewsProvider } from "./news/NewsProvider"
import TaskForm from "./tasks/TaskForm"
import TaskList from "./tasks/TaskList"
import { EventProvider } from "./events/EventProvider"
import NewsList from "./news/NewsList"
import EventList from "./events/EventList"
import NewsForm from "./news/NewsForm"


export default (props) => {
    return (
        <>
            <Route exact path="/"></Route>

            <NewsProvider>
                <Route
                    exact path="/news/create"
                    render={props => <NewsForm {...props} />}
                />
                <Route exact path="/news"
                    render={props => <NewsList {...props} />}
                />
            </NewsProvider>

            <EventProvider>
                <Route exact path="/events" render={
                    props => <EventList {...props} />
                } />
            </EventProvider>


            <TaskProvider>
                <Route
                    exact
                    path="/tasks"
                    render={props => <TaskList {...props} />}
                />
                <Route
                    exact
                    path="/tasks/create"
                    render={props => <TaskForm {...props} />}
                />
                <Route
                    exact
                    path="/tasks/edit/:taskId(\d+)"
                    render={props => <TaskForm {...props} />}
                />
            </TaskProvider>
        </>
    );
}