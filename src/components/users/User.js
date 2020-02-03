import React, { useContext } from "react"
import { FriendContext } from "../friends/FriendProvider"
import "./User.css"

export default ({ user}) => {
const {addFriend}= useContext(FriendContext)








  return (<>
    <section className="singleUser">
      {user.firstName} {user.lastName}
      <button onClick={() => {
        const newFriend = {
          userId: user.id,
          activeUserId: parseInt(localStorage.getItem("activeUser"), 10)
        }
        addFriend(newFriend)
      }}>Add Friend</button>
    </section>
    </>
  )

}
