import React from 'react'
import styled from 'styled-components'

const SportText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Sports: React.FunctionComponent = () => {
    return (
        <SportText>Sport</SportText>
    )
}

export default Sports