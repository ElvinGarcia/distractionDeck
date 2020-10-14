
function post(obj) {


  }

function getcolumns() {
  const columns = getStorageItem("user").columns
  return columns
}

function createPost() {
  const post =
  `
  <div class="post">
    <div class="avatar">[logo]</div>
      <div class="content">
        <div class="post-title username">Fast Company</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat,blanditiis minus
          cupiditate voluptatibus aperiam, odit nihil consectetur sunt laboriosam.
        <div class="post-actions">
         <i class="far fa-comment"></i>
         <i class="far fa-heart"></i>
         <i class="options">...</i>
        </div>
      </div>
    </div>`;
    return post
}