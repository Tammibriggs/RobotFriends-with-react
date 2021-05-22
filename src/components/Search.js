import React from 'react'
import './search.css'


function Search(props){

    return (      
       <input type="text" placeholder="Search robots" name="robot-search" onChange={props.searchchange}/>
    )
}

export default Search;