import './normalize.css'
import './fonts.css'
import { Route, Routes } from 'react-router-dom'
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
import { getIsInitialize } from './redux/Selectors/AppSelectors'
import { HomePage } from './components/HomePage/HomePage'
import { Verify } from './components/Auth/Verify/Verify'
import { VerifyPhone } from './components/Auth/Verify/VerifyPhone'
import { SetNewPassword } from './components/Auth/SetNewPassword/SetNewPassword'

function App() {
    const dispatch = useDispatch()
    const isInitialize = useSelector(getIsInitialize)

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
                    <Route path="/new-password" element={<SetNewPassword />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/verify-phone" element={<VerifyPhone />} />
                    <Route path="/" element={<StartPage />} />
                    <Route path="home" element={<HomePage />} />
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
