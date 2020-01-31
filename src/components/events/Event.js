import React, { useContext } from "react"
import "./Events.css"
import { EventContext } from "./EventProvider"

export default ({ event, history }) => {

    const { deleteEvent } = useContext(EventContext)
    
    // Display conditional buttons
    function LoggedInUserButtons() {
      if (event.userId === parseInt(localStorage.getItem("activeUser"))) {
        return (
          <>
            <button onClick={() => {
              history.push(`/events/edit/${event.id}`)
          }}>Edit</button>

          <button onClick={
              () => {
                  deleteEvent(event)
                      .then(() => {
                          history.push("/events")
                      })}
          }>Delete</button>
        </>
        )
      }
    } 

    // Formatting time display
    const timeFormat = (dateTimePicked) => {
        const [date, militaryTime] = dateTimePicked.split("T")
        let [hours, minutes] = militaryTime.split(":")
        if (hours >= 13) {
          return `${(hours - 12)}:${minutes} PM`
        } else if (hours === '12') {
          return `${hours}:${minutes} PM`
        } else if (hours < 12 && hours > 9) {
          return `${hours}:${minutes} AM`
        } else if (hours <= 9 && hours > 0) {
          const [zero, currentHour] = hours.split("")
          return `${currentHour}:${minutes} AM`
        } else if (hours === '00') {
          return `${hours = 12}:${minutes} AM`
        }
      }

    return (
        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__location">{event.location}</div>
            <div className="event__time">{timeFormat(event.timestamp)}</div>
            <div className="event__poster">posted by userId {event.userId}</div>
            <div>{LoggedInUserButtons()}</div>

            {/* <button onClick={() => {
                history.push(`/events/edit/${event.id}`)
             }}>Edit</button>

            <button onClick={
                () => {
                    deleteEvent(event)
                        .then(() => {
                            history.push("/events")
                        })
                }
            }>
                Delete
            </button> */}
        </section>
    )
}