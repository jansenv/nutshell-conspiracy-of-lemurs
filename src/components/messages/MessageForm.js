import React, { useContext } from "react"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

export default (props) => {
    const { messages, updateMessage, addMessage } = useContext(MessageContext)

    const createNewMessage = () => {
        if (editMode) {
            updateMessage({
                id: news.id,
                userId: parseInt(localStorage.getItem("activeUser")),
                message: message.message,
                timestamp: Date.now()
            })
        } else {
            addMessage({
              userId: parseInt(localStorage.getItem("activeUser")),
              message: message.message,
              timestamp: Date.now()
          })
        }
    }

}