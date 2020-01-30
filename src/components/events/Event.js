import React, { useContext } from "react"
import "./Events.css"
import { EventContext } from "./EventProvider"

// ask Mo why use history instead of props

export default ({ event, history }) => {
    const { deleteEvent } = useContext(EventContext)

    return (
        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__location">{event.location}</div>
            <div className="event__time">{event.timestamp}</div>
            <div className="event__poster">posted by userId {event.userId}</div>
            <button onClick={
                () => {
                    deleteEvent(event)
                        .then(() => {
                            history.push("/events")
                        })
                }
            }>
                Delete
            </button>
        </section>
    )
}