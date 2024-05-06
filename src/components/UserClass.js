import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            count : 0,
        }
    }

   componentDidMount(){
    console.log(this.props.name +" child component did mount")
   }

    

    render(){
        const {name, Location} = this.props;
        
        const {count} = this.state;
        console.log(name +" child render")
        return(
           
            <div>
            
            <h1>{count}</h1>
            <h2>Name:{name}</h2>
            <h2>Location:{Location}</h2>
            <h2>Learning:react</h2>
            </div>
        )
    }
}

export default UserClass;