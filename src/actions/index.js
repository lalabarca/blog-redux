// TODO: add and export your own actions
export const FETCH_POSTS = "FETCH_POSTS";


export function fetchPosts() {
  const promise = fetch('http://reduxblog.herokuapp.com/api/posts?key=lala').then(r => r.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  };
}
