import { FETCH_POSTS, FETCH_POST, POST_CREATED } from "../actions";

export default function(state = [], action){
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return [ action.payload ] // transform the single post into an array so we don't break the redux state, it's still an array
    // case POST_CREATED:
    //   // push the action.payload into the new array of posts
    //   return state;
      // const new_posts = state.push(action.payload);
      // return new_posts;
    default:
      return state;
  }
}
