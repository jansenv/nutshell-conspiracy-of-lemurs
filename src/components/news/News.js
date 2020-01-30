// Authored by Spencer Truett

import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"


  export default ({history,  news }) => {
      const url = `https://www.${news.url}`
      const { deleteNews } = useContext(NewsContext)
      const news = (news => {

        const FriendChecker = (friends) => {
          const foundFriends = friends.filter(relat => {
            if (relat.activeUserId === parseInt(sessionStorage.getItem("activeUser"))) {
              return relat
            }
          })
      
          let shouldIRender = false
          let createdByMe = false
          
          if (news.userId === parseInt(sessionStorage.getItem("activeUser"))) {
            shouldIRender = true
            createdByMe = true
          }
      
          foundFriends.forEach(element => {
            if (element.user.id === news.userId) {
              shouldIRender = true
            }
          });
      
          if (shouldIRender && createdByMe) {
            return 
            <section className="news">
            <h3 className="news__name">
              <a href={url}>{ news.title }</a>
            </h3>
    
            <div className="news__synopsis">{ news.synopsis }</div>
            {/* <div>Submitted by ${news.user.firstName} ${news.user.lastName}</div> */}
    
    
             <button onClick={() => {history.push(`/news/edit/${news.id}`)
                 }}>Edit</button>
    
            <button onClick={
                    () => {deleteNews(news)
                            .then(() => { history.push("/news")})
                    }}>Delete</button>
        </section>
          }
      
          if (shouldIRender) {
            return 
            <section className="news">
            <h3 className="news__name">
              <a href={url}>{ news.title }</a>
            </h3>
    
            <div className="news__synopsis">{ news.synopsis }</div>
            {/* <div>Submitted by ${news.user.firstName} ${news.user.lastName}</div> */}
        </section>
          }
      
        }
      
        return FriendChecker(useFriends())
      
      })


  }