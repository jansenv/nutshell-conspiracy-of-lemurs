import React, { useContext } from "react"
import "./Friends.css"
import { FriendContext } from "./FriendProvider"

export default ({ friend }) => {
    const { addFriend } = useContext(FriendContext) 
    
    return (
    <section>
                {friend.user.firstName} {friend.user.lastName}
        <button onClick={() => {
                    addFriend(friend)
                }}>Add Friend</button>
    </section>
)
}