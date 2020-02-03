import React, { useContext } from "react"
import "./Events.css"
import { EventContext } from "./EventProvider"
import Event from "./Event"
import { FriendContext } from "../friends/FriendProvider"

export default (props) => {
    const { events } = useContext(EventContext)
    const { friends } = useContext(FriendContext)
    const activeUserId = parseInt(localStorage.getItem("activeUser"), 10)

    const filteredFriends = friends.filter(friend => friend.activeUserId === activeUserId)

    let friendsIdsArray = []

    filteredFriends.forEach(friend => {
        friendsIdsArray.push(friend.userId)
    })

    const filteredEvents = events.filter(event => event.userId === activeUserId || friendsIdsArray.includes(event.userId))

    const sortedEvents = filteredEvents.sort(
        (currentEvent, nextEvent) =>
        Date.parse(currentEvent.timestamp) - Date.parse(nextEvent.timestamp)
    )

    return (
        <>
        <div className="eventsList">
            <div>
                <h1>Events</h1>

                <button onClick={() => props.history.push("/events/create")}>
                    Add Event
                </button>
            </div>    
            <div className="events">
                {
                    sortedEvents.map(event => {
                        return <Event key={event.id} event={event} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}