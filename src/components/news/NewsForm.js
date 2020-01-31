// Authored by Spencer Truett

import React, { useContext, useState, useEffect } from "react"
import { NewsContext } from "./NewsProvider"


export default props => {
    const { addNews, NewsArray, updateNews } = useContext(NewsContext)
    const [news, setNews] = useState({})

    const editMode = props.match.params.hasOwnProperty("newsId")

    const handleControlledInputChange = (event) => {

        const newNews = Object.assign({}, news)
        newNews[event.target.name] = event.target.value
        setNews(newNews)
    }

    const setDefaults = () => {
        if (editMode) {
            const newsId = parseInt(props.match.params.newsId)
            const selectedNews = NewsArray.find(n => n.id === newsId) || {}
            setNews(selectedNews)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [NewsArray])

    // const getCurrentDate= (separator='') => {

    //     let newDate = new Date()
    //     let date = newDate.getDate();
    //     let month = newDate.getMonth() + 1;
    //     let year = newDate.getFullYear();

        
    //     return `${month<10?`0${month}`:`${month}`}/${separator}${date}/${separator}${year}`
    //     }

    const createNewNews = () => {
            if (editMode) {
                updateNews({
                    id: news.id,
                    title: news.title,
                    url: news.url,
                    synopsis: news.synopsis,
                    userId: parseInt(localStorage.getItem("activeUser")),
                    timestamp: Date.now()
                })
                    .then(() => props.history.push("/news"))
            } else {
                addNews({
                  id: news.id,
                  title: news.title,
                  url: news.url,
                  synopsis: news.synopsis,
                  userId: parseInt(localStorage.getItem("activeUser")),
                  timestamp: Date.now()
              })
                  .then(() => props.history.push("/news"))
            }
        }
    

    return (
        <form className="newsForm">
            <h2 className="newsForm__title">{editMode ? "Edit News" : "Add News"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={news.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">URL: </label>
                    <input type="text" name="url" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={news.url}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Synopsis: </label>
                    <input type="text" name="synopsis" required className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={news.synopsis}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewNews()
                }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Add News"}
            </button>

        </form>
    )
}