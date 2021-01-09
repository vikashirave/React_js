import React, { Component } from 'react'

 class UserGreeting extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            isLoggedIn: true
       }
   }
   

    render() {
        //conditinal rendering
           //4th aproach               //shrt circuit operator

       return this.state.isLoggedIn && <div>welcome Vikas</div> 

        //3rd aproach
        // return (
        //     this.state.isLoggedIn ? (
        //     <div>Welcome Vikas</div>      //conditional operator
        //     ) : (
        //     <div>Welcome Guest</div>
        //     )
        
        // )
        //2nd Aproach
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vikas</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

         //1st Aproach
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Vikas
        //         </div>
        //     )
        // }
        // else {
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        //}
        // return (
        //     <div>
        //        <div> Welcome Vikas</div>
        //        <div>welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
