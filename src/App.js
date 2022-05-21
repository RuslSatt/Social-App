import './normalize.css'
import './fonts.css'
import { Route, Routes } from 'react-router-dom'
import { HomePageContainer } from './components/HomePage/HomePageContainer'
import { PostContainer } from './components/Post/PostContainer'
import { MessageContainer } from './components/Message/MessageContainer'
import { ChatMessageContainer } from './components/Message/ChatMessage/ChatMessageContainer'
import { UserProfileContainer } from './components/UserProfile/UserProfileContainer'
import { StartPage } from './components/StartPage/StartPage'
import { SignIn } from './components/Auth/SignIn/SignIn'
import { SignUp } from './components/Auth/SignUp/SignUp'
import { StartProfile } from './components/StartProfile/StartProfile'
import styled from 'styled-components'
import { Setting } from './components/Setting/Setting'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeUser } from './redux/AppReducer'

function App() {
    const initializeUserDispatch = useDispatch()
    useEffect(() => {
        initializeUserDispatch(initializeUser())
    })

    return (
        <AppWrapper>
            <AppContainer>
                <Routes>
                    <Route path="/start-profile" element={<StartProfile />} />
                    <Route path="/setting-profile" element={<Setting />} />
                    <Route path="/auth" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/social-app" element={<StartPage />} />
                    <Route path="home" element={<HomePageContainer />} />
                    <Route path="/post/:postId" element={<PostContainer />} />
                    <Route path="message" element={<MessageContainer />} />
                    <Route
                        path="user-chat"
                        element={<ChatMessageContainer />}
                    />
                    <Route
                        path="user-profile"
                        element={<UserProfileContainer />}
                    />
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
