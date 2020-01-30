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
    
    // const SearchFriends = () => {
    //     users.filter(us=>{
    //         Object.values(us).map(ass=>{
    //           if(String(ass).toLowerCase().includes(friendSearch.value.toLowerCase())){
    //           return ass
    //         }

    //         }) 
    //       })
    //         console.log(users) 
    // }
    

    {
        const foundFriends = friends.filter(friend => {
            return friend.activeUserId === parseInt(localStorage.getItem("activeUser"))
        })

        return (
        <>
            <div className="sectionHeader">Friends List!</div>
            <div className="friendBox">
            <input placeholder="Search"
                id="friendSearch"
                ref={friendSearch}
                onChange = {console.log(friendSearch)}
                type="text"
                class="friendSearch"
                placeholder="Search for friends here!" />
            {
                foundFriends.map(friend => {
                    console.log(friend)
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