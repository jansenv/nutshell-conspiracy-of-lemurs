import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { NewsProvider } from "./news/NewsProvider"
import TaskForm from "./tasks/TaskForm"
import TaskList from "./tasks/TaskList"
import { EventProvider } from "./events/EventProvider"
import EventList from "./events/EventList"
import { FriendProvider } from "./friends/FriendProvider"
import FriendList from "./friends/FriendList"
import { UserProvider } from "./users/UserProvider"
import NewsList from "./news/NewsList"
import NewsForm from "./news/NewsForm"
import EventForm from "./events/EventForm"
import { MessageProvider } from "./messages/MessageProvider"
import MessageList from "./messages/MessageList"


export default (props) => {
    return (
        <>
            <UserProvider>
                <FriendProvider>
                    <MessageProvider>
                        <Route path="/"
                            render={props => <FriendList {...props} />}
                        />
                        <Route path="/"
                            render={props => <MessageList {...props} />}
                        />
                    </MessageProvider>
                </FriendProvider>
            </UserProvider>

      <NewsProvider>
        <FriendProvider>
          <Route exact path="/news"
            render={props => <NewsList {...props} />}
          />
          <Route
            exact path="/news/create"
            render={props => <NewsForm {...props} />}
          />
          <Route
            exact path="/news/edit/:newsId(\d+)"
            render={props => <NewsForm {...props} />}
          />
        </FriendProvider>
      </NewsProvider>


            <EventProvider>
                <Route exact path="/events" render={
                    props => <EventList {...props} />
                } />
                <Route exact path="/events/create"
                    render={props => <EventForm {...props} />}
                />
                <Route exact path="/events/edit/:eventId(\d+)"
                    render={props => <EventForm {...props} />}
                />
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