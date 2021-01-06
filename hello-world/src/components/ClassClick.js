import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log("clicked the Button")
    }        //class event handling
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default ClassClick
