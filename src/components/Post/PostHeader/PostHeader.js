import React from 'react'
import HeaderPostStyle from './HeaderPost.module.css'
import { ReactComponent as ArrowIcon } from '../../../assets/images/arrow-back.svg'
import { ReactComponent as HeartIcon } from '../../../assets/images/heart-2.svg'
import { ReactComponent as PlusIcon } from '../../../assets/images/plus-2.svg'
import { ReactComponent as UploadIcon } from '../../../assets/images/Upload.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PostHeader = () => {
    return (
        <Header className={HeaderPostStyle.Header}>
            <NavLink to="/home">
                <ArrowIcon />
            </NavLink>
            <Icons className={HeaderPostStyle.icons}>
                <button>
                    <HeartIcon />
                </button>
                <button>
                    <PlusIcon />
                </button>
                <button>
                    <UploadIcon />
                </button>
            </Icons>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
`

const Icons = styled.div`
    display: flex;
    gap: 1rem;
    button {
        background: transparent;
    }
`

export { PostHeader }
