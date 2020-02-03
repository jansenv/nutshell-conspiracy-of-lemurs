// Authored by Holden Parker
import React, { useContext } from "react"
import Message from "./Message"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

export default (props) => {
    const { messages } = useContext(MessageContext)

    return (
        <>
            <h4>Messages</h4>
            <div className="messages">
            <button onClick={() => props.history.push('/message/create')}>Add Message</button>
                {
                    messages.map(message => {
                        return <Message key={message.id} message={message} {...props} />
                    }).reverse()
                }
            </div>
        </>
    )
}