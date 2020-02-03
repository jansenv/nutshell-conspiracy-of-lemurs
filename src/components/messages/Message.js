// Authored by Holden Parker
import React, { useContext } from "react"
import "./Messages.css"
import { FriendContext } from "../friends/FriendProvider"
import { MessageContext } from "./MessageProvider"

export default ({ history, message }) => {
    const { friends, addFriend } = useContext(FriendContext)
    const { deleteMessage } = useContext(MessageContext)

        const foundFriends = friends.filter(friend => {
            return friend.activeUserId === parseInt(localStorage.getItem("activeUser"))
        })

        const foundMessageBuddies = foundFriends.find(friend => friend.userId === message.userId)


    if (message.user.id === parseInt(localStorage.getItem("activeUser"), 10)) {
        return (
            <section className="userMessage">
                <div>{message.user.firstName} {message.user.lastName}</div>
                <div>{message.message}</div>
                <button onClick={() => {
                    deleteMessage(message)
                }}>Delete</button>
                <button onClick={() => {
                history.push(`/message/edit/${message.id}`)
                }}>Edit</button>
            </section>
        )
    } else if (foundMessageBuddies) {
        return (
        <section className="userMessage">
                <div>{message.user.firstName} {message.user.lastName}</div>
                <div>{message.message}</div>
            </section>
        )
    } else {
        return (
            <section className="userMessage">
                <div>{message.user.firstName} {message.user.lastName} <button onClick={() => {
                    const newFriend = {
                        userId: message.user.id,
                        activeUserId: parseInt(localStorage.getItem("activeUser"), 10)
                    }
                    addFriend(newFriend)
                }}>Add Friend</button></div>
                <div>{message.message}</div>
            </section>
        )
    }

}

// } else if (message.userId !== parseInt(localStorage.getItem("activeUser"), 10)) {
//     for (const friend of foundFriends) {
//         if (message.userId === friend.userId) {
//             return (
//                 <section className="userMessage">
//                     <div>{message.user.firstName} {message.user.lastName}</div>
//                     <div>{message.message}</div>
//                 </section>
//             )
//         }
//     }