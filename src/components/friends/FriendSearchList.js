import React, { useContext } from "react"
import "./Events.css"
import FriendSearch from "./FriendSearch"


export default (props, {users}) => {

    return (
        <>
            <h1>Results</h1>

            <div className="friendsSearched">
                {
                    events.map(event => {
                        return <FriendSearch key={event.id} event={event} {...props} />
                    })
                }
            </div>
        </>
    )
}