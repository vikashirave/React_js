import React from 'react'

//function Greet(){
 //   return <h1>Hello Vikas</h1>
//}
// const Greet = () => <h1>Hello Vikas</h1>//functional component
const Greet = props =>{
    const {name, heroName} = props
return(
<div><h1>Hello {name} a.k.a {heroName}</h1>
</div>
)
}
export default Greet