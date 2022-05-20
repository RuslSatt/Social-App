import React from 'react'
import HeaderBack from '../../../assets/images/header-background.png'
import Avatar from '../../../assets/images/posts/Post-3.png'
import addPhoto from '../../../assets/images/addPhoto.svg'
import styled from 'styled-components'

const HeaderStartProfile = () => {
    return (
        <Header>
            <Body>
                <h1>Welcome</h1>
                <ImageA src={Avatar} alt="avatar" />
                <ImageAdd src={addPhoto} alt="addPhoto" />
                <input type="file" />
            </Body>
            <Image src={HeaderBack} alt="background" />
        </Header>
    )
}

const Header = styled.div`
    min-height: 150px;
    position: relative;
`

const Body = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    h1 {
        font-size: 26px;
        color: #fff;
    }
    input {
        opacity: 0;
        width: 30px;
        height: 30px;
        position: absolute;
        margin-left: 80px;
        top: 155px;
        z-index: 10;
    }
`

const Image = styled.img`
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
`

const ImageA = styled.img`
    position: absolute;
    top: 80px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

const ImageAdd = styled.img`
    position: absolute;
    margin-left: 80px;
    top: 155px;
    width: 30px;
    height: 30px;
`

export { HeaderStartProfile }
