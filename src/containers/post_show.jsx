import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import action
import { fetchPost } from '../actions';

class PostShow extends Component {
  // on appelle l'action fetchPost au moment du loading du component
  componentWillMount() {
    // if we're coming from the post index, this.props.post is already there. we need to check
    if (!this.props.post) {
      this.props.fetchPost(this.props.match.params.id);
      // if doesn't exist we call the action with the id from the url
    }
  }

  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

// Pour accéder aux props du post il faut d'abord trouver le post avec son id dans l'rul
function mapStateToProps(state, ownProps) {
  // i get the url from the route with the component props and convert it in an integer
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  // among all the posts from the redux state i search if the id for each
  // post is equal to the idfromurl that i have
  const post = state.posts.find(p => p.id === idFromUrl);
  return {
    post
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
