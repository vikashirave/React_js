import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super() 
        this.state = {
            messsage: 'welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            messsage: 'Thank You For Subscribing'
        })
    }
    render(){
       return( 
       <div>
           <h1>{this.state.messsage}</h1>
           <button onClick={() => this.changeMessage()}>Subscribe</button>
       </div> )
       
     
    }
}
export default Message