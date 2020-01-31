// Authored by Spencer Truett

import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"
import { UserContext } from "../users/UserProvider"




  export default ( {history, news, friendStatus }) => {
      const url = `https://www.${news.url}`
      const { deleteNews } = useContext(NewsContext)
      const { users } = useContext(UserContext)

      let deleteNewsButton = ""
      let editNewsButton = ""

      if (friendStatus === false) {
        deleteNewsButton = <>
            <button onClick={
                () => {
                    deleteNews(news)
                        .then(() => {
                            history.push("/news")
                        })
                }
            }>Delete</button>
        </>
      }
      if (friendStatus === false) {
        editNewsButton = <>
        <button onClick={() => {
                history.push(`/news/edit/${news.id}`)
        }}>Edit</button>
        </>
      }
      let newsAuthor = users.find(
        user => user.id === news.userId
      )
      return (
        <section className="news">
            <h3 className="news__name">
              <a href={url}>{ news.title }</a>
            </h3>

            <div className="news__synopsis">{ news.synopsis }</div>
            <div>Submitted by {newsAuthor.firstName} {newsAuthor.lastName}</div>
            {deleteNewsButton}
            {editNewsButton}
        </section>
    )
  }