import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import CommentPage from "./components/commentPage";
import "./index.css";




const Router = (props) => {
  return (
    <div>
    <BrowserRouter>
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1>
                <Link to="/">Dylan's playlist(Add your favourite song)</Link>
              </h1>

              <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="help.html">Help me</a>
    </div>
      <ul class="nav navbar-nav">
      <li class="active"><a href="index.js">Home</a></li>
      <li><a href="/help.html">Page 1</a></li>
    
    </ul>
  </div>
</nav>

            </div>
          </div>
        </div>
        <Switch>
          <Route path="/posts/:post_id" component={CommentPage} />
          <Route exact path="/" component={App} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
};




ReactDOM.render(<Router />, document.getElementById("root"));