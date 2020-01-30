import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { NewsProvider } from "./news/NewsProvider"
import { EventProvider } from "./events/EventProvider"
import EventList from "./events/EventList"
import { FriendProvider } from "./friends/FriendProvider"
import FriendList from "./friends/FriendList"
import { UserProvider } from "./users/UserProvider"


export default () => {
    return (
        <>
            <UserProvider>
                <FriendProvider>
                    <Route exact path="/">
                        <FriendList />
                    </Route>
                </FriendProvider>
            </UserProvider>



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
                <Route exact path="/tasks">
                </Route>
            </TaskProvider>
        </>
    )
}