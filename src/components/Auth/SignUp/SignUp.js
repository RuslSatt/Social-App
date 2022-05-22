import React from 'react'
import { HeaderSign } from '../SignIn/HeaderSign'
import { FormSignUp } from './FormSignUp'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthWrapper } from '../AuthStyles'
import {
    getDisplayName,
    getIsAuth,
} from '../../../redux/Selectors/AppSelectors'

const SignUp = () => {
    const isRegister = useSelector((state) => state.auth.isRegister)
    const displayName = useSelector(getDisplayName)
    const isAuth = useSelector(getIsAuth)

    if (isRegister) {
        return <Navigate to="/auth" />
    }

    if (isAuth && displayName !== null) {
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
