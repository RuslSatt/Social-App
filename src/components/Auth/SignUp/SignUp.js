import React from 'react'
import { HeaderSign } from '../SignIn/HeaderSign'
import { FormSignUp } from './FormSignUp'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthWrapper } from '../AuthStyles'

const SignUp = () => {
    const isRegister = useSelector((state) => state.auth.isRegister)
    const app = useSelector((state) => state.app)

    if (isRegister) {
        return <Navigate to="/auth" />
    }

    if (app.isLogin && app.displayName !== null) {
        return <Navigate to="/home" />
    }

    return (
        <AuthWrapper>
            <HeaderSign />
            <FormSignUp />
        </AuthWrapper>
    )
}

export { SignUp }
