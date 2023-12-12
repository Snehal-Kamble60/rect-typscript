import React from 'react'
import styled from 'styled-components'

const RoleText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Role: React.FunctionComponent = () => {
    return (
        <RoleText>Role</RoleText>
    )
}

export default Role