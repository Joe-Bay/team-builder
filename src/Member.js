// this is where my code for the member goes
import React from 'react'
import styled from 'styled-components'

const StyledMemberContainer = styled.div`
background-color: lightgray;
border-radius: 10px;
border: 1px solid black;
margin-bottom: 2%;
box-shadow: 2px 2px;



`

export default function Member(props) {
    const { details } = props

    if(!details) {
        return <h2>Fetching your member's details please wait a moment sire</h2>
    }
    return (
        <StyledMemberContainer className='member container'>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>

        </StyledMemberContainer>
    )
}


