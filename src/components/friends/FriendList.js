import React, { useContext } from "react"
import Friend from "./Friend"
import "./Friends.css"
import { FriendContext } from "./FriendProvider"

export default (props) => {
    const { friends } = useContext(FriendContext)


    {
        const foundFriends = friends.filter(friend => {
            return friend.activeUserId === parseInt(localStorage.getItem("activeUser"))
        })

        return (
            <>
                <h4 className="sectionHeader">Friends List!</h4>
                <div className="friendBox">
                    
                    {
                        foundFriends.map(friend => {
                            
                            return (
                                <Friend key={friend.id} friend={friend} />
                            )
                        }
                        )
                    }
                </div>
            </>
        )
    }
}

// export const SearchUserList=()=>{
//     searchedArray.map()
// }