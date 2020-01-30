import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"


  export default ({history,  news }) => {
      const url = `https://www.${news.url}`
      const { NewsArray, deleteNews, updateNews } = useContext(NewsContext)
      

 return (
    <section className="news">
        <h3 className="news__name">
          <a href={url}>{ news.title }</a>
        </h3>

        <div className="news__synopsis">{ news.synopsis }</div>
        {/* <div>Submitted by ${news.user.firstName} ${news.user.lastName}</div> */}


         <button onClick={() => {
                history.push(`/news/edit/${news.id}`)
             }}>Edit</button>

        <button onClick={
                () => {
                    deleteNews(news)
                        .then(() => {
                            history.push("/news")
                        })
                }
            }>Delete</button>
    </section>
)
  }