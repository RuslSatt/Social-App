import React from 'react'
import PreloadImage from '../../../assets/preload/Spinner-2.gif'
import styled from 'styled-components'

const Preload = () => {
    return (
        <div
            style={{
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                paddingTop: 50,
                justifyContent: 'center',
            }}
        >
            <img
                style={{
                    width: 50,
                    height: 50,
                }}
                src={PreloadImage}
                alt=""
            />
        </div>
    )
}

export const PreloadContainer = styled.div`
    min-height: 100vh;
    overflow: hidden;
    background: rgba(197, 197, 253, 0.37);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export { Preload }
