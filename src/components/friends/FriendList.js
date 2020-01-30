import React, { useContext, useReducer } from "react"
import Friend from "./Friend"
import "./Friends.css"
import { FriendContext } from "./FriendProvider"
import { UserContext } from "../users/UserProvider"

export default (props) => {
    const { friends } = useContext(FriendContext)
    const { users } = useContext(UserContext)

    {
        const whoIAm = users.find(person => person.id === localStorage.getItem("activeUser"))
    

        friends.map(friend => {
            if (friend.activeUserId === localStorage.getItem("activeUser")) {
                const foundFriend = users.find(user => user.id === friend.userId)
                console.log(foundFriend)
                return (
                    <Friend key={foundFriend.id} friend={foundFriend}></Friend>
                )
            }
        })
        return null
    }



    // return (
    //     <div>
    //     <button onClick={() => {
    //         if (localStorage.getItem("kennel_customer")) {
    //             props.history.push("/animals/create")               
    //         } else {
    //             props.history.push("/register")
    //         }}}>
    //         Make Appointment
    //     </button>
    //     <div className="animals">
    //     {
    //         animals.map(ani => {
                
    //         return <Animal key={ani.id} animal={ani} />
    //         })
    //     }
    //     </div>
    //     </div>
    // )
}