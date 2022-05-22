import React from 'react'
import { HeaderSign } from './HeaderSign'
import { FormSign } from './FormSign'
import { OtherSign } from './OtherSign'
import { AuthWrapper } from '../AuthStyles'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const SignIn = () => {
    const app = useSelector((state) => state.app)

    if (app.isLogin && app.displayName === null) {
        return <Navigate to="/start-profile" />
    }

    if (app.isLogin && app.displayName !== null) {
        return <Navigate to="/home" />
    }

    return (
        <AuthWrapper>
            <HeaderSign />
            <FormSign />
            <OtherSign />
        </AuthWrapper>
    )
}

export { SignIn }
