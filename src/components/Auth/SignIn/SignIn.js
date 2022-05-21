import React from 'react'
import { HeaderSign } from './HeaderSign'
import { FormSign } from './FormSign'
import { OtherSign } from './OtherSign'
import { AuthWrapper } from '../AuthStyles'

const SignIn = (props) => {
    return (
        <AuthWrapper>
            <HeaderSign />
            <FormSign />
            <OtherSign />
        </AuthWrapper>
    )
}

export { SignIn }
