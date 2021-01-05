import React from 'react'

//function Greet(){
 //   return <h1>Hello Vikas</h1>
//}
// const Greet = () => <h1>Hello Vikas</h1>//functional component
const Greet = (props) =>{
console.log(props)
return(
<div><h1>Hello {props.name} a.k.a {props.heroName}</h1>
{props.children }
</div>
)
}
export default Greet