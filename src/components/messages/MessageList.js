import React, { useContext } from "react"
import Message from "./Message"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

export default (props) => {
    const { messages } = useContext(MessageContext)

    return (
        <>
        <div className="messageBox">
            <h4>Messages</h4>
            <div className="messages">
                {
                    messages.map(message => {
                        return <Message key={message.id} message={message} {...props} />
                    })
                }
            </div>
        </div>
        </>
    )
}