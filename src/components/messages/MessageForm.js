// Authored by Holden Parker
import React, { useContext, useState, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"


export default (props) => {
    const { messages, updateMessage, addMessage } = useContext(MessageContext)
    const [message, setMessage] = useState({})

    const editMode = props.match.params.hasOwnProperty("messageId")

    const handleControlledInputChange = (event) => {
        const newMessage = Object.assign({}, message)
        newMessage[event.target.name] = event.target.value
        console.log("targetvalue", message)
        setMessage(newMessage)
    } 

    const setDefaults = () => {
        if (editMode) {
            const messageId = parseInt(props.match.params.messageId)
            const selectedMessage = messages.find(m => m.id === messageId) || {}
            setMessage(selectedMessage)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [messages])

    const createNewMessage = () => {
        if (editMode) {
            updateMessage({
                id: message.id,
                userId: parseInt(localStorage.getItem("activeUser")),
                message: message.messageArea,
                timestamp: Date.now()
            })
        } else {
            addMessage({
              userId: parseInt(localStorage.getItem("activeUser")),
              message: message.messageArea,
              timestamp: Date.now()
          })
        }
    }

    return (
        <form className="messageForm">
            <h2 className="messageForm__title">{editMode ? "Edit Message" : "Add Message"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="messageArea">Message: </label>
                    <textarea 
                        name="messageArea" 
                        required 
                        className="form-control"
                        proptype="varchar"
                        placeholder=""
                        defaultValue={message.message}
                        onChange={handleControlledInputChange}
                    ></textarea>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewMessage()
                    props.history.push('/')
                }}
                className="btn btn-primary">
                {editMode ? "Update Message" : "Add Message"}
            </button>

        </form>
    )
}