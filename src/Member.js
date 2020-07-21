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
            <p>Hobbie: {details.hobbie}</p>
            <p>Country: {details.country}</p>
            <p>Favorite Quote {details.favoriteQuote}</p>
        </div>
    )
}