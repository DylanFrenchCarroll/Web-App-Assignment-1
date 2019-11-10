import React, { Component } from "react";
import "./help.css";


export default class Help extends Component {
    constructor(props){
        super(props);
        this.help = "This is my help page, this is a web app based on hackerNews but changed some front end and some back end stuff.";
        this.state = {};
    }

render(){
    return (
    <body className="font"> {this.help} </body>
     );
}

}