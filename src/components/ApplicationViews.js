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
import UserList from "./users/UserList"
import "./ApplicationViews.css"
import MessageForm from "./messages/MessageForm"
import SlideShow from "./home/SlideShow"

export default (props) => {
    return (
        <>
            <UserProvider>
                <FriendProvider>
                    <TaskProvider>
                        <NewsProvider>
                            <MessageProvider>
                                <EventProvider>
                                <div className="main">
                                    <div className="messageFriendsContainer">
                                        <div className="logoContainer">
                                            <img className="logoImage" src={require('./images/LemurLogo.png')}></img>
                                        </div>
                                        <Route path="/"
                                            render={props => <FriendList {...props} />}
                                        />
                                        <Route path="/"
                                            render={props => <MessageList {...props} />}
                                        />
                                        <Route
                                            exact path="/message/edit/:messageId(\d+)"
                                            render={props => <MessageForm {...props} />}
                                        />
                                        <Route
                                            exact path="/message/create"
                                            render={props => <MessageForm {...props} />}
                                        />
                                    </div>


                                    <div className="NETContainer">
                                        <div className="userNames">
                                            <Route
                                                exact
                                                path="/friends"
                                                render={props => <UserList {...props} />}
                                            />
                                        </div>
                                        <div className="newsContainer">
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
                                        </div>
                                        <div className="LemurHome">
                                        <Route
                                                exact path="/"
                                                render={props => <SlideShow {...props} />}
                                            />
                                        </div>

                                        <div className="eventsContainer">
                                            <Route exact path="/events" render={
                                                props => <EventList {...props} />
                                            } />
                                            <Route exact path="/events/create"
                                                render={props => <EventForm {...props} />}
                                            />
                                            <Route exact path="/events/edit/:eventId(\d+)"
                                                render={props => <EventForm {...props} />}
                                            />
                                        </div>



                                        <div className="taskContainer">
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
                                        </div>
                                    </div>
                                </div>
                                </EventProvider>
                            </MessageProvider>
                        </NewsProvider>
                    </TaskProvider>
                </FriendProvider>
            </UserProvider>

        </>
    );
}