import React from 'react'
import styled from 'styled-components'

const UserProfileTabs = () => {
    return (
        <Wrapper>
            <Shot>
                <span>
                    <div></div>
                </span>
                <span>shots</span>
            </Shot>
            <Collection>
                <span>
                    <div></div>
                </span>
                <span>shots</span>
            </Collection>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 23px;
    padding-left: 10px;
    padding-right: 10px;
`

const Shot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 50%;
    background: #f1f1fe;
    padding: 10px 33px;
    border-radius: 6px;
    gap: 5px;

    span {
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        text-align: center;
        letter-spacing: -0.1px;
        color: #888bf4;
    }
`

const Collection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 50%;
    padding: 10px 33px;
    border-radius: 6px;
    gap: 5px;

    span {
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        text-align: center;
        letter-spacing: -0.1px;
    }
`

export { UserProfileTabs }
