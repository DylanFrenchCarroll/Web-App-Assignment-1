import React, { Component } from 'react';
import NewsList from './components/newsList/';
import Form from './components/newsForm/';
import api from './dataStore/stubAPI';

export default class App extends Component {    

        addNewsItem = (title, author, link) => {
        api.add(title, author, link);
        this.setState({});
      };

        incrementUpvote = (id) => {
        api.upvote(id) ;
        this.setState({});
    };

    render() {
        let posts =  api.getAll();
        return (
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 ">
                  <Form handleAdd={this.addNewsItem} />
                </div>
                <div className="col-md-8">
                  <NewsList posts={posts} upvoteHandler={this.incrementUpvote} />
                </div>
              </div>
            </div>
          );
    }
}