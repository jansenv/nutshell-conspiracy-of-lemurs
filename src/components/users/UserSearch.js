import React, { useContext, useState, useEffect } from "react"
import UserList from "./UserList"
import { UserContext } from "./UserProvider"
import { FriendContext } from "../friends/FriendProvider"



export default (props) => {
let {users} = useContext(UserContext)
let searchedUsers = []
const {addFriend}=useContext(FriendContext)

const [userArray, setNewUserArray] = useState([])
    const handleControlledInputChange = (event) => {
      let filteredUsers = []
      if (event.target.value !== "") {
        users.filter(us => {
          Object.values(us).map(ass => {
            if (String(ass).toLowerCase().includes(event.target.value.toLowerCase())) {
              filteredUsers.push(us)
            }
    
          })
        })
        const reducedUsers = [...new Set(filteredUsers)]
        reducedUsers.filter((item, index) => reducedUsers.indexOf(item) === index)
        reducedUsers.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
        
        searchedUsers = reducedUsers
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
      //  I know this is very wrong!~~!!!
        // const newUserArray = Object.assign([], userArray)

        // maybe this could be right?
        const newUserArray = Array.assign([], userArray)
      
        newUserArray = searchedUsers
        setNewUserArray(newUserArray)
    }
    console.log("searchedUsers", userArray)
  }
    const setDefaults = () => {
      

            setNewUserArray(searchedUsers)
        
    }

    useEffect(() => {
        setDefaults()
    }, [userArray])





const SearchFriends = (event) => {
 
    console.log(searchedUsers)

return (
<>
    <input placeholder="Search"
      id="friendSearch"
      onChange={handleControlledInputChange}
      type="text"
      className="friendSearch"
      placeholder="Search for friends here!" />

    <UserList key={userArray[0].id} searchedUsers={userArray} {...props} />
  </>
)

}
}
