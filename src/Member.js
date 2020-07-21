// this is where my code for the member goes
import React from 'react'

export default function Member(props) {
    const { details } = props

    if(!details) {
        return <h2>Fetching your member's details please wait a moment sire</h2>
    }
    return (
        <div className='member container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>

        </div>
    )
}


