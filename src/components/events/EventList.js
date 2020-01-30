import React, { useContext } from "react"
import "./Events.css"
import { EventContext } from "./EventProvider"
import Event from "./Event"

export default () => {
    const { events } = useContext(EventContext)

    return (
        <>
            <h1>Events</h1>

            <div className="events">
                {
                    events.map(event => {
                        return <Event key={event.id} event={event} />
                    })
                }
            </div>
        </>
    )
}