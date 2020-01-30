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

    const SearchFriends = (event) => {
        const filteredUsers = []
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
            console.log(reducedUsers)
            console.log(filteredUsers)
        }
    }


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
                        onChange={SearchFriends}
                        type="text"
                        className="friendSearch"
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