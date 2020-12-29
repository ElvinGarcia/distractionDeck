function editPost(postContent) {
  debugger;
  const form = `<div id="compose-area">
        <header>Edit Post</header>

        <form action="" id="post_form" name="post" method="POST">
            <textarea maxlength = "280" required id="post-text">${postContent}</textarea>
            <button id="send-button" title="Post (⌘Return)">Post</button>
        </form>
      </div>
      <div id="options">
        <ul>
            <li><button> Add Images or Videos</button></li>
            <li><button> Schedule a Post</button></li>
            <li><button> Direct Message</button></li>
        </ul>
      </div>`
  return form
  }


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

function composeContainer() {
  let div = document.createElement("div");
  div.innerHTML = `
    <div id="postMenu">
    <header>
        <ul>
            <li>Post</li>
            <li> <a href="">X </a> </li>
        </ul>
        <hr>
        <break>
    </header>
    <div id='acconts'>
        <p>From :
        ${getCookie("name")}
        </p>
    </div>
    <div id="compose-area">
        <header>New Post</header>

        <form action="" id="post_form" name="post" method="POST">
            <textarea placeholder="What's happening?"   maxlength = "280" required id="post-text"></textarea>
            <button id="send-button" title="Post (⌘Return)">Post</button>
        </form>
    </div>
    <div id="options">
        <ul>
            <li><button> Add Images or Videos</button></li>
            <li><button> Schedule a Post</button></li>
            <li><button> Direct Message</button></li>
        </ul>
    </div>
    </div>
     `

  return div;
}

