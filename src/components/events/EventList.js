import React, { useContext } from "react"
import "./Events.css"
import { EventContext } from "./EventProvider"
import Event from "./Event"

export default (props) => {
    const { events } = useContext(EventContext)

    return (
        <>
            <h1>Events</h1>

            <button onClick={() => props.history.push("/events/create")}>
                Add Event
            </button>

            <div className="events">
                {
                    events.map(event => {
                        return <Event key={event.id} event={event} {...props} />
                    })
                }
            </div>
        </>
    )
}