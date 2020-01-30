import React from "react"
// import "./News.css"

export default ({ news }) => {
  const url = `https://www.${news.url}`
 return (
    <section className="news">
        <h3 className="news__name">
          <a href={url}>{ news.title }</a>
        </h3>

        <div className="news__synopsis">{ news.synopsis }</div>
        {/* <div>Submitted by ${news.user.firstName} ${news.user.lastName}</div> */}
    </section>
)
  }