import React, { Component } from 'react'
import Odinochka from './Odinochka'

export default class App extends Component {

  constructor(props){
    super(props)

    this.state={
      data:[],
      valueText:''
    }
    this.go=this.go.bind(this)
  }
  go=async()=>{
    var text = this.state.valueText
    let resp = await fetch('https://randomuser.me/api/?results=' + text)
    let data = await resp.json()
    console.log(data)
    this.setState({
      data:data.results
    })


  }

  render() {
    return (
      <div id="div">
        <input 
        onChange={
          (event)=>{this.setState({valueText:event.target.value})
          }
        }></input>
        <button 
        onClick={this.go}
        >Search</button>
        {
          this.state ?
          this.state.data.map(elem=>{
            return(
              <Odinochka data ={elem}/>
            )
          }):null
        }
      </div>
    )
  }
}

