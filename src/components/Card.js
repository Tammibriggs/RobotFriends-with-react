import React from 'react'
import './card.css'

function Card (props){
    return (
        <div className= "card">
            <img src={`https://robohash.org/${props.id}?200x200`} alt=""/>
            <div>
                <h2 className="robots-h2">{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card