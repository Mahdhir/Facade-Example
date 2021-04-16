// Import stylesheets
import "./style.css";
import { PostService } from "./services/postsService.js";
import { PostServiceFacade } from "./services/postsServiceWithFacade.js";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Without Facade
let postService = new PostService();
postService.getPosts().then(res => console.log(res));
postService.getPostsById(2).then(res => console.log(res));
postService.getIndividualPostComments(2).then(res => console.log(res));

//With Facade
let postServiceWithFacade = new PostServiceFacade();
postServiceWithFacade.getPosts().then(res => console.log(res));
postServiceWithFacade.getPostsById(2).then(res => console.log(res));
postServiceWithFacade
  .getIndividualPostComments(2)
  .then(res => console.log(res));
