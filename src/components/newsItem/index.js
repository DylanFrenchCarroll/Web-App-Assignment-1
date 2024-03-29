import React, { Component, Fragment } from 'react';
import './newsItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {
  render() {
        let line = this.props.post.link ? (
            <a href={this.props.post.link}>{this.props.post.title}</a>
        ) : (
            <span>{this.props.post.title}</span>
        );
        return (
            <Fragment>
                <div className="padding">
                <span className="ptr" >
                    <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="0.75x" />
                {` ${this.props.post.upvotes}`}
                </span>


                <span className="newsitem">
                    {line}  
                </span>

                      
                <p className="author"> - {this.props.post.author}</p>

                <p className="comments">
                    <Link to={`/posts/${this.props.post.id}` }>Comments</Link> 
                </p>
                </div>
            </Fragment>
        );
    }
} 