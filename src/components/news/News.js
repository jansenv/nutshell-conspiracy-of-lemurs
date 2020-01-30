import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"
// import "./News.css"

export default (props, { news }) => {
  const url = `https://www.${news.url}`
  const { NewsArray, deleteNews } = useContext(NewsContext)

 return (
    <section className="news">
        <h3 className="news__name">
          <a href={url}>{ news.title }</a>
        </h3>

        <div className="news__synopsis">{ news.synopsis }</div>
        {/* <div>Submitted by ${news.user.firstName} ${news.user.lastName}</div> */}

        <button onClick={
                () => {
                    deleteNews(NewsArray)
                        .then(() => {
                            props.history.push("/news")
                        })
                }
            }>
                Delete
            </button>
    </section>
)
  }