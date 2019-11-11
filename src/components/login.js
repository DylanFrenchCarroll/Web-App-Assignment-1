import React, { Component } from 'react';
import "./help.css";


export default class Login extends Component {
  state = { userName: '', password: ''};
  handleUserNameChange = (e) =>  this.setState({userName: e.target.value});
  handlePasswordChange = (e) =>  this.setState({password: e.target.value});
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd( this.state.userName, this.state.password)
    this.setState({ userName: '', password:''})
}
render() {
  return (
   <form   className="login">

       <h3>Login/Sign Up</h3>


       <div className="form-group">
           <input type="text"
               className="form-control"
               placeholder="Username"
               value={this.state.userName}
               onChange={ this.handleUserNameChange } />
       </div>


       <div className="form-group">
           <input type="password"
               className="form-control"
               placeholder="Password"
               value={this.state.password}
               onChange={ this.handlePasswordChange } />
       </div>



    
       
       <button type="submit" className="btn btn-primary"
                onClick={this.handleSubmit}>Add</button>

   </form>
   );
}
}