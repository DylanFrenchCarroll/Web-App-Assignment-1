import React, { Component, Fragment } from 'react';
import NewsItem from '../newsItem/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





export default class NewsList extends Component {
  handleVote = () =>  this.props.upvoteHandler(this.props.post.id);
    
  
  render() {
    let items = this.props.posts.map(
      (post,index) => 
          <NewsItem key={index} 
              post={post} 
              upvoteHandler={this.props.upvoteHandler} /> 
      );
      
      return (<Fragment>{items}
      
      <span className="ptr" onClick={this.handleVote}>
        <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="1x" />
        </span>

      </Fragment>
        
        
      );
      }
  }
