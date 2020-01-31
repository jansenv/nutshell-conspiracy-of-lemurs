import React, { useContext } from "react"
import User from "./User"
import { UserContext } from "./UserProvider"
import { FriendContext } from "../friends/FriendProvider"



export default (props, { searchedUsers }) => {
  const { users } = useContext(UserContext)
const {friends} =useContext(FriendContext)
  let filteredFriends = []
  friends.filter(user => {
    if (user.activeUserId === parseInt(localStorage.getItem("activeUser"), 10)) {
      filteredFriends.push(user.user)
    }
  })
  console.log(filteredFriends)
  let nonFriendsArray = []
  users.filter(user=>{
    if(user.id!==parseInt(localStorage.getItem("activeUser"),10)){
      //checking if current user is already a friend
      const haveFriended = filteredFriends.find(friend=> friend.id === user.id) || null
      if(haveFriended ===null){
        nonFriendsArray.push(user)

      }
    }
  })




  return (
    <>
      <h2>Add A Friend</h2>
      <div className="friendsSearched" id="friendsSearched">
        {

nonFriendsArray.map(user => {
            return <User key={user.id} user={user} {...props} />
          })

        }
      </div>
    </>

  )


}





