import './normalize.css'
import './fonts.css'
import { Route, Routes } from 'react-router-dom'
import { HomePageContainer } from './components/HomePage/HomePageContainer'
import { MessageContainer } from './components/Message/MessageContainer'
import { ChatMessageContainer } from './components/Message/ChatMessage/ChatMessageContainer'
import { StartPage } from './components/StartPage/StartPage'
import { SignIn } from './components/Auth/SignIn/SignIn'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { StartProfile } from './components/StartProfile/StartProfile'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser } from './redux/AppReducer'
import { Preload, PreloadContainer } from './components/Common/Preload/Preload'
import { Setting } from './components/Setting/Setting'
import { Post } from './components/Post/Post'
import { UserProfile } from './components/UserProfile/UserProfile'

function App() {
    const dispatch = useDispatch()
    const isInitialize = useSelector((state) => state.app.isInitialize)
    useEffect(() => {
        dispatch(initializeUser())
    })

    if (!isInitialize) {
        return (
            <PreloadContainer>
                <Preload />
            </PreloadContainer>
        )
    }

    return (
        <AppWrapper>
            <AppContainer>
                <Routes>
                    <Route path="/start-profile" element={<StartProfile />} />
                    <Route path="/setting-profile" element={<Setting />} />
                    <Route path="/auth" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<StartPage />} />
                    <Route path="home" element={<HomePageContainer />} />
                    <Route path="/post/:postId" element={<Post />} />
                    <Route path="message" element={<MessageContainer />} />
                    <Route
                        path="user-chat"
                        element={<ChatMessageContainer />}
                    />
                    <Route path="user-profile" element={<UserProfile />} />
                </Routes>
            </AppContainer>
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    background: rgba(136, 139, 244, 0.19);
`

const AppContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
`

export default App
