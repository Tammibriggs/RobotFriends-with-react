import React from 'react'
import Cardlist from '../components/Cardlist'
import Search from '../components/Search'
import Scroll from '../components/Scroll'
import './app.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {this.setState({robots:data})})
    }

    onsearchchange = (event) => {

        this.setState({searchfield : event.target.value})
    }

    render(){
        const filtersearch = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    
        }
      )
      if(!this.state.robots.length){
          return <h1>Loading</h1>
      }
      else{
        return (
            <div className="wrapper">
                <h1>ROBOTFREINDS</h1>
                <Search searchchange={this.onsearchchange}/>
                <Scroll>
                    <Cardlist robots={filtersearch}/>
                </Scroll>
            </div>
        )
      }
       
    }
    
}

export default App