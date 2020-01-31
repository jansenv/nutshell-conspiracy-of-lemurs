import React, { useContext } from "react"
import { FriendContext } from "../friends/FriendProvider"
// import "./Friends.css"

export default ({ user}) => {
const {addFriend}= useContext(FriendContext)
const { friends } = useContext(FriendContext)


let filteredFriends = []
friends.filter(user => {
  if (user.activeUserId === parseInt(localStorage.getItem("activeUser"), 10)) {
    filteredFriends.push(user.user)
  }
})
console.log(filteredFriends)
let UsersFriend= false
filteredFriends.map(friend=>{
  if(user.id === friend.id){
    return UsersFriend = true
  }
})



console.log(UsersFriend)

if(UsersFriend === false){

  return (<>
    <section>
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
}
