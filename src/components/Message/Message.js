import React from 'react'
import MessageStyle from './Message.module.css'
import { HeaderMessage } from './HeaderMessage/HeaderMessage'
import { UserMessage } from './UserMessage/UserMessage'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Message = (props) => {
    const app = useSelector((state) => state.app)

    if (app.isNavigate) {
        return <Navigate to="/auth" />
    }

    let userMessage = props.messageState.map((elem) => (
        <UserMessage
            name={elem.name}
            textMessage={elem.textMessage}
            time={elem.time}
            countMessage={elem.countMessage}
            key={elem.id}
        />
    ))

    return (
        <div className={MessageStyle.Message}>
            <HeaderMessage />
            {userMessage}
        </div>
    )
}

export { Message }
