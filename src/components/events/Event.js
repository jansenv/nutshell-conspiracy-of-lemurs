import React, { useContext } from "react"
import "./Events.css"
import { EventContext } from "./EventProvider"

export default ({ event, history }) => {

  const { deleteEvent } = useContext(EventContext)
  const loggedInUserId = parseInt(localStorage.getItem("activeUser"))

  // Display conditional buttons
  function LoggedInUserButtons() {
    if (event.userId === loggedInUserId) {
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
                })
            }
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

  function RenderEvents() {
    if (event.userId === loggedInUserId) {
      return <section className="myEvent">
          <h3 className="event__name">{event.name}</h3>
          <div className="event__location">{event.location}</div>
          <div className="event__time">{new Date(event.timestamp).toLocaleDateString('en-US') + " " + timeFormat(event.timestamp)}</div>
          <div>{LoggedInUserButtons()}</div>
        </section>
    } else {
      return <section className="event">
          <h3 className="event__name">{event.name}</h3>
          <div className="event__location">{event.location}</div>
          <div className="event__time">{new Date(event.timestamp).toLocaleDateString('en-US') + " " + timeFormat(event.timestamp)}</div>
          <div className="event__poster">posted by {event.user.firstName} {event.user.lastName}</div>
        </section>
    }
  }
  
  return RenderEvents()

}