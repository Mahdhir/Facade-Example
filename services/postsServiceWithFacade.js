import axios from "axios";
export class PostServiceFacade {
  constructor() {
    this.postsFacade = new PostServiceBaseFacade();
  }
  getPosts() {
    return this.postsFacade.getAxiosPosts();
  }

  getPostsById(id) {
    return this.postsFacade.getAxiosPosts(id);
  }

  getIndividualPostComments(id) {
    return this.postsFacade.getAxiosPosts(id, true);
  }
}

class PostServiceBaseFacade {
  getAxiosPosts(id, comments) {
    let baseUrl = "https://jsonplaceholder.typicode.com/posts";
    if (id) baseUrl += `/${id}`;
    if (comments) baseUrl += "/comments";
    return axios.get(baseUrl).then(res => res.data);
  }
}
