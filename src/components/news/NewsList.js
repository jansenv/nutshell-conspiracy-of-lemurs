import React, { useContext } from "react"
import { NewsContext } from "./NewsProvider"
import News from "./News"
// import "./News.css"

export default (props) => {
    const { news } = useContext(NewsContext)

    return (
        <>
            <h1>News</h1>

            <div className="news">

                {
                    news.map(news => {
                        return <News key={news.id} news={news} />
                    })
                }
            </div>
        </>
    )
}