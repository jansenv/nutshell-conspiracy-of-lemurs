import React, { useState, useEffect } from "react"

export const NewsContext = React.createContext()

export const NewsProvider = (props) => {
    const [NewsArray, setNews] = useState([])

    const getNews = () => {
        return fetch("http://localhost:8088/news")
            .then(res => res.json())
            .then(setNews)
    }

    const addNews = news => {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
            .then(getNews)
    }

    const deleteNews = news => {
        return fetch(`http://localhost:8088/news/${news.id}`, {
            method: "DELETE"
        })
            .then(getNews)
    }


    const updateNews = news => {
        return fetch(`http://localhost:8088/news/${news.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
            .then(getNews)
    }

    useEffect(() => {
        getNews()
    }, [])

    useEffect(() => {
        console.log(NewsArray)
    }, [NewsArray])

    return (
        <NewsContext.Provider value={{
            NewsArray, addNews, deleteNews, updateNews
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}