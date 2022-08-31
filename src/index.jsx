import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// importing reducers
import postsReducer from './reducers/posts_reducer';

// Import components
import PostsIndex from './containers/posts_index';
import PostShow from './containers/post_show';
import PostNew from "./containers/post_new";

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  posts: postsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostNew} />
          <Route path="/posts/:id" component={PostShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
