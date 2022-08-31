import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

//  import action
import { createPost } from '../actions';

class PostsNew extends Component {
  // callback when the form is submitted
  onSubmit = (values) => {
    // createPost take a second argument after values, which is a callback
    this.props.createPost(values, (post) => {
      this.props.history.push('/'); // Navigate after submit, redirect to posts_index to fetchPosts
      return post;
    });
  }

  // method to build the field with boostrap
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <label htmlFor="content">Content</label>
          <Field
            className="form-control"
            label="Content"
            name="content"
            component="textarea"
            rows="8"
          />
          <button className="btn btn-primary" type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

// pas besoin de mapDispatchToProps pour Redux Form
export default reduxForm({ form: 'newPostForm' })(
  connect(null, { createPost })(PostsNew)
);
