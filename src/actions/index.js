// TODO: add and export your own actions
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const POST_CREATED = "POST_CREATED";


export function fetchPosts() {
  const promise = fetch('http://reduxblog.herokuapp.com/api/posts?key=lala').then(r => r.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const promise = fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=lala`).then(r => r.json());

  return {
    type: FETCH_POST,
    payload: promise
  };
}

export function createPost(body) {
  const request = fetch('http://reduxblog.herokuapp.com/api/posts/?key=lala', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: FETCH_POST,
    payload: request
  };
}
