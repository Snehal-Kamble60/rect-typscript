import React from 'react'
import styled from 'styled-components'

const ActivityLogText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const ActivityLog: React.FunctionComponent = () => {
    return (
        <ActivityLogText>ActivityLog</ActivityLogText>
    )
}

export default ActivityLog