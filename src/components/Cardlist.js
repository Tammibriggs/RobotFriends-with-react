import React from 'react'
import './cardlist.css'
import Card from './Card'

function Cardlist({robots}){
    const cardComponent = robots.map((items, i) => {
        return <Card id={robots[i].id} key={i} name={robots[i].name} email ={robots[i].email} />    
           
    })
    return (
        <div className="contains-cards">
            {cardComponent}
        </div>
    )
}

export default Cardlist