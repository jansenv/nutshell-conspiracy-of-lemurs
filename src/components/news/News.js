// Authored by Spencer Truett

import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"


  export default ( {history, news, friendStatus }) => {
      const url = `https://www.${news.url}`
      const { deleteNews } = useContext(NewsContext)

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

 return (
    <section className="news">
        <h3 className="news__name">
          <a href={url}>{ news.title }</a>
        </h3>

        <div className="news__synopsis">{ news.synopsis }</div>
        {/* <div>Submitted by ${news.user.firstName} ${news.user.lastName}</div> */}
        {deleteNewsButton}
        {editNewsButton}
    </section>
    )
  }