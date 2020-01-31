import React, { useContext } from "react"
import User from "./User"
import { UserContext } from "./UserProvider"



export default (props, { searchedUsers }) => {
  const { users } = useContext(UserContext)





  return (
    <>
      <h2>Add A Friend</h2>
      <div className="friendsSearched" id="friendsSearched">
        {

users.map(user => {
            return <User key={user.id} user={user} {...props} />
          })




        }
      </div>
    </>

  )


}





