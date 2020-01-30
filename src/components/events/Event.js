import React from "react"
import "./Events.css"
import { Link } from "react-router-dom"

export default ({ event }) => (
    <section className="event">
        <h3 className="event__name">{event.name}</h3>
        <div className="event__location">{event.location}</div>
        <div className="event__time">{event.timestamp}</div>
        <div className="event__poster">posted by userId {event.userId}</div>
    </section>
)