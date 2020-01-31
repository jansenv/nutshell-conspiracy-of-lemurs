// Authored by Holden Parker
import React, { useContext } from "react"
import "./Messages.css"
import { FriendContext } from "../friends/FriendProvider"
import { MessageContext } from "./MessageProvider"
// import { UserContext } from "../users/UserProvider"


export default ({ message }) => {
    const { friends, addFriend } = useContext(FriendContext)
    const { deleteMessage, addMessage } = useContext(MessageContext)
    
    const foundFriends = friends.filter(friend => friend.activeUserId === parseInt(localStorage.getItem("activeUser"), 10)
    )
    console.log("noway" + foundFriends)
    // const { users } = useContext(UserContext)

    //   let filteredFriends = []
    //   friends.filter(user => {
    //     if (user.activeUserId === parseInt(localStorage.getItem("activeUser"), 10)) {
    //       filteredFriends.push(user.user)
    //     }
    //   })
    //   console.log(filteredFriends)
    //   let nonFriendsArray = []
    //   users.filter(user=>{
    //     if(user.id!==parseInt(localStorage.getItem("activeUser"),10)){
    //       //checking if current user is already a friend
    //       const haveFriended = filteredFriends.find(friend=> friend.id === user.id) || null
    //       if(haveFriended ===null){
    //         return (
    //             <section className="userMessage">
    //                 <div>{message.user.firstName} {message.user.lastName}</div>
    //                 <div>{message.message}</div>
    //             </section>
    //         )
    //       } else {
    //         return (
    //             <section className="userMessage">
    //                 <div>{message.user.firstName} {message.user.lastName} <button onClick={() => {
    //                     const newFriend = {
    //                         userId: message.user.id,
    //                         activeUserId: parseInt(localStorage.getItem("activeUser"), 10)
    //                     }
    //                     addFriend(newFriend)
    //                 }}>Add Friend</button></div>
    //                 <div>{message.message}</div>
    //             </section>
    //         )
    //     } 
    //     } else if (message.user.id === parseInt(localStorage.getItem("activeUser"), 10)) {
    //         return (
    //             <section className="userMessage">
    //                 {/* // edit delete button */}
    //                 <div>{message.user.firstName} {message.user.lastName}</div>
    //                 <div>{message.message}</div>
    //             </section>
    //         )
    //     }
    //   })

    if (message.user.id === parseInt(localStorage.getItem("activeUser"), 10)) {
        return (
            <section className="userMessage">
                <div>{message.user.firstName} {message.user.lastName}</div>
                <div>{message.message}</div>
                <button onClick={() => {
                    deleteMessage(message)
                }}>Delete</button>
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