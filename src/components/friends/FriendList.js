import React, { useContext, useRef } from "react"
import Friend from "./Friend"
import "./Friends.css"
import { FriendContext } from "./FriendProvider"
import { UserContext } from "../users/UserProvider"

export default (props) => {
    const { users } = useContext(UserContext)
    const { friends, addFriend } = useContext(FriendContext)
    const friendSearch = useRef("")

    // const constructNewFriend = () => {
    //         {
    //             addFriend ({
    //                 userId: friend.id,
    //                 activeUserId: parseInt(localStorage.getItem("activeUser"))
    //             })
    //                 .then(() => props.history.push("/"))
    //         }
    //     }

    


    {
        const foundFriends = friends.filter(friend => {
            return friend.activeUserId === parseInt(localStorage.getItem("activeUser"))
        })

        return (
            <>
            <div className="friends">
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
            </div>
            </>
        )
    }
}

// export const SearchUserList=()=>{
//     searchedArray.map()
// }