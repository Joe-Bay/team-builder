// this is where my code for the member goes
import React from 'react'
import styled from 'styled-components'

const styledMemberContainer = styled.div`
background-color: lightgray;
border-radius: '10px';
border: '1px solid red';



`

export default function Member(props) {
    const { details } = props

    if(!details) {
        return <h2>Fetching your member's details please wait a moment sire</h2>
    }
    return (
        <styledMemberContainer className='member container'>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>

        </styledMemberContainer>
    )
}


