import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }  //function event handling
    return (
        <div>
            <button onClick= {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
