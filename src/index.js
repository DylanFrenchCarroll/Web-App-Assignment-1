import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import CommentPage from "./components/commentPage";
import Help from "./components/Help.js";
import "./index.css";

const Router = (props) => {
  return (
    
    <BrowserRouter>
      <div className="h2 jumbotron ">
        <div className="h2 container-fluid ">
          
          <div className="h2 row">
            <div className="h2 body">
              <h1>
                <Link className= "head"to="/">Dylan's playlist(Add your favourite song)</Link>
              </h1>
              
            </div>
          </div>
        </div>

              <div className="help">
              <body>  
                <Link to="/help">Help</Link>  
              </body>
              </div>
          

        <Switch>
          <Route path="/posts/:post_id" component={CommentPage} />
          <Route path = "/help" component= {Help}  />
          <Route exact path="/" component={App} />
          
          <Redirect from="*" to="/" />
        </Switch>

        
      </div>
    </BrowserRouter>

   
  );
};




ReactDOM.render(<Router />, document.getElementById("root"));