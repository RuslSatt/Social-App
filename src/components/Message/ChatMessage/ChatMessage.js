import React from 'react'
import ChatMessageStyle from './ChatMessage.module.css'
import { HeaderChat } from './HeaderChat/HeaderChat'
import { UserMessageChat } from './UserMessageChat/UserMessageChat'
import { TypeMessageContainer } from './TypeMessage/TypeMessageContainer'
import { useSelector } from 'react-redux'
import { getIsNavigate } from '../../../redux/Selectors/AppSelectors'
import { Navigate } from 'react-router-dom'

const ChatMessage = (props) => {
    const isNavigate = useSelector(getIsNavigate)

    if (isNavigate) {
        return <Navigate to="/auth" />
    }

    let userMessageChat = props.newMessage.map((elem) => (
        <UserMessageChat
            time={elem.time}
            message={elem.message}
            key={elem.id}
        />
    ))

    return (
        <div className={ChatMessageStyle.Chat}>
            <HeaderChat />
            <div className={ChatMessageStyle.body__user}>{userMessageChat}</div>
            <TypeMessageContainer />
        </div>
    )
}

export { ChatMessage }
