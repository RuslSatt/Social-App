import React from 'react'
import WelcomePageStyle from './StartPage.module.css'
import Images1 from '../../assets/images/mask-group-1.png'
import Images2 from '../../assets/images/mask-group-2.png'
import Images3 from '../../assets/images/mask-group-3.png'
import Images4 from '../../assets/images/mask-group-4.png'
import { Navigate, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const StartPage = () => {
    const app = useSelector((state) => state.app)

    if (app.isNavigate) {
        return <Navigate to="/auth" />
    }

    return (
        <div className={WelcomePageStyle.body}>
            <p className={WelcomePageStyle.title}>Social App</p>
            <div className={WelcomePageStyle.images}>
                <img src={Images1} alt="" />
                <img src={Images2} alt="" />
                <img src={Images3} alt="" />
                <img src={Images4} alt="" />
            </div>
            <p className={WelcomePageStyle.caption}>
                SHARE - INSPIRE - CONNECT
            </p>
            <NavLink to="/auth">
                <button className={WelcomePageStyle.button}>GET STARTED</button>
            </NavLink>
        </div>
    )
}

export { StartPage }
