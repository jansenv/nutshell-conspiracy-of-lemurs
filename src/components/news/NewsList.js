// Authored by Spencer Truett

import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"
import { FriendContext } from "../friends/FriendProvider"

import News from "./News"

// import "./News.css"

export default (props) => {
    const { NewsArray } = useContext(NewsContext)
    const { friends } = useContext(FriendContext)

    let isFriend = false;

    const usersNews = NewsArray.filter(
      article =>
          article.userId === parseInt(localStorage.getItem("activeUser"))
  )
  console.log(usersNews)
  
    let friendsNews = []
      friends.map(friend => {
          if (friend.activeUserId === parseInt(localStorage.getItem("activeUser"))) {
              NewsArray.filter(
                  article => {
                      if (article.userId === friend.user.id) {
                          friendsNews.push(article)
                      }
                  }
              )
          }
      })
  
      const combinedArray = usersNews.concat(friendsNews)
  
  


    return (
        <>
            <h1>News</h1>
            <div className="news">

            <button onClick={() => props.history.push("/news/create")}>
                Add News
            </button>
     {
        combinedArray.map(singleNews => {
          if (singleNews.userId != parseInt(localStorage.getItem("activeUser"))) {
            isFriend = true;

          }


          return (
            <News {...props} key={singleNews.id}
                  news={singleNews}
                  friendStatus={isFriend} />
        )
    })
  }
            </div>
        </>
    )
}