import React from 'react'

function ChildComponent(props) {    //child component
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
