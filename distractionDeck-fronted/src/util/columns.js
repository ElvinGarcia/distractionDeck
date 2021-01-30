function editPost(postObject) {
  const form = `
      <div id="edit-form-container">
      <div id="compose-area">
        <header>Edit Post</header>
        <form action="" id="edit_form" name="post" data-post-id=${postObject.post_id} data-user-id=${postObject.user_id}  method="POST">
            <textarea maxlength = "280" required id="post-text" autofocus>${postObject.content}</textarea>
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
          <p id="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat,blanditiis minus
            cupiditate voluptatibus aperiam, odit nihil consectetur sunt laboriosam.
          </p>
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
            <li> <i class="fas fa-times" data-action="close"></i> </li>
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

