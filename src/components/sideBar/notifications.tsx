import React from 'react'
import styled from 'styled-components'

const NotificationText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Notification: React.FunctionComponent = () => {
    return (
        <NotificationText>NotificationText</NotificationText>
    )
}

export default Notification