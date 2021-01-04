import React from 'react'

 const Hello = () => {
//     return(
//         <div>
//             <h1>Hello Vikas</h1>
//         </div>
//     )
//JSX
return React.createElement('div', {id: 'hello', className : "dummyclass"}, React.createElement('h1', null, 'Hello Vikas')) 
}



export default Hello