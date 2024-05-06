import React from "react";
import UserContext from "../utils/UserContext";




class About extends React.Component{
    constructor(props){
        super(props )
     
    }

    componentDidMount(){
      
    }

    render(){

       
        return(
        <>
        <UserContext.Consumer>
            {({loggedInUser}) =>(<h1>{loggedInUser}</h1>)}
        </UserContext.Consumer>
        
       
        </>     
    )}
}

export default About;