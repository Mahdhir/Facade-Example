import axios from "axios";
export class PostService {
  getPosts() {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data);
  }

  getPostsById(id) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.data);
  }

  getIndividualPostComments(id) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.data);
  }
}
