import React from 'react'
import { HeaderSign } from '../SignIn/HeaderSign'
import { FormSignUp } from './FormSignUp'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthWrapper } from '../AuthStyles'

const SignUp = () => {
    const isRegister = useSelector((state) => state.auth.isRegister)
    if (isRegister) {
        return <Navigate to="/auth" />
    }
    return (
        <AuthWrapper>
            <HeaderSign />
            <FormSignUp />
        </AuthWrapper>
    )
}

export { SignUp }
