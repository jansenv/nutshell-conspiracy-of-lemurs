import React, { useContext } from "react"
import "./Friends.css"
import { FriendContext } from "./FriendProvider"

export default ({ friend }) => {
    const { deleteFriend } = useContext(FriendContext) 
    
    return (
    <section>
                {friend.user.firstName} {friend.user.lastName}
        <button onClick={() => {
                    deleteFriend(friend)
                }}>Delete Friend</button>
    </section>
)
}
