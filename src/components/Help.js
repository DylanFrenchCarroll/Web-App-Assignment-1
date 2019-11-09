import React, { Component } from "react";



export default class Help extends Component {
    constructor(props){
        super(props);
        this.help = "This is my help page";
        this.state = {};
    }

render(){
    return (
    <body> {this.help} </body>
     );
}

}