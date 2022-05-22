import React from 'react'
import { HeaderSign } from './HeaderSign'
import { FormSign } from './FormSign'
import { OtherSign } from './OtherSign'
import { AuthWrapper } from '../AuthStyles'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {
    getDisplayName,
    getIsAuth,
} from '../../../redux/Selectors/AppSelectors'

const SignIn = () => {
    const displayName = useSelector(getDisplayName)
    const isAuth = useSelector(getIsAuth)

    if (isAuth && displayName === null) {
        return <Navigate to="/start-profile" />
    }

    if (isAuth && displayName !== null) {
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
