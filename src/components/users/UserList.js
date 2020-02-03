import React, { useContext } from "react"
import User from "./User"
import { UserContext } from "./UserProvider"
import { FriendContext } from "../friends/FriendProvider"



export default (props, { searchedUsers }) => {
  console.log("seached users maybe", searchedUsers)
  const { users } = useContext(UserContext)
  let reducedUsers = []
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
let filteredUsers = []
  const SearchFunction =(event)=>{
    if (event.target.value !== "") {
    nonFriendsArray.filter(us => {
      Object.values(us).map(ass => {
        if (String(ass).toLowerCase().includes(event.target.value.toLowerCase())) {
          filteredUsers.push(us)
        }

      })
    })
    reducedUsers = [...new Set(filteredUsers)]
    reducedUsers.filter((item, index) => reducedUsers.indexOf(item) === index)
    reducedUsers.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
    console.log("SEARCHED THINGS", reducedUsers)

  

    
  }
}



  return (
    <>
    
    {/* <input placeholder="Search"
      id="friendSearch"
      onChange={SearchFunction}
      type="text"
      className="friendSearch"
      placeholder="Search for friends here!" /> */}

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





