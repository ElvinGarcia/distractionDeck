
class Post{
    constructor(){

    }

    // sets the posts on each column from ascending order
     post(obj) {
        const columns = getcolumns();
        //  Array(5) [ {…}, {…}, {…}, {…}, {…} ]
    for (let i = 0; columns.length > 0;  i++) {
        const columnObject = columns[i] ;
            //Object { id: 6, name: "Home", user_id: 2, created_at: "2020-10-07T10:40:31.774Z", updated_at: "2020-10-07T10:40:31.774Z", posts: (2) […] }
            // <div class="posts">
        for (let i = columnObject.posts.length - 1; i > 0; i--) {
            const posts = document.getElementById(columnObject.name).lastElementChild ;
            const postObject = columnObject.posts[i];
            // Object { id: 3, body: "blah blah blah", user_id: 2, created_at: "2020-10-09T17:57:19.765Z", updated_at: "2020-10-09T17:57:19.765Z", column_id: 6 }
            let div = document.createElement("div");
                div.setAttribute("class", "post");
                div.setAttribute("data-post-id", `${postObject.id}`);
                div.setAttribute("data-user-id", `${postObject.user_id}`);

            div.innerHTML =`<div class="avatar"><a href="">[logo]</a></div>
            <div class="content" data-post-id=${postObject.id} data-user-id=${postObject.user_id}>
                <div class="post-title username"><a href="">${postObject.user.username}</a></div>
                <p id="post-content">${postObject.body}</p>
                <div class="post-actions">
                <ul class="post-actions reactions">
                <li><a href=""><i class="far fa-comment" data-action="comment"></i></a></li>
                <li><a href=""> <i class="far fa-heart" data-action="like"></i></a></li>
                <li class="options">
                    <a href=""data-action="more_options">....</a>
                    <ul class="dropdown-content ">
                        <li class="is-selectable"><a href="#" data-action="edit">Edit this Post</a></li>
                        <li class="is-selectable"><a href="#" data-action="delete">Delete</a></li>
                        <li class="is-selectable"><a href="#" data-action="copy">Copy link to this Post</a></li>

                    </ul>
                </li>
                </ul>



                </div>

            </div>
            `
                posts.appendChild(div)
            }
           return true
    }

    }

     createPost(postObject) {

        // get column
            const home = document.getElementById("Home");
            const postList = home.getElementsByClassName("posts")[0];

        // create post style with comments
         let div = document.createElement("div");
         div.setAttribute("class", "post");
         div.setAttribute("data-post-id", `${postObject.id}`);
         div.setAttribute("data-user-id", `${postObject.user_id}`);
            div.innerHTML = `<div class="avatar"><a href="">[logo]</a></div>
            <div class="content" data-post-id=${postObject.id} data-user-id=${postObject.user_id}>
                <div class="post-title username"><a href="">${postObject.user.username}</a></div>
                <p id="post-content">${postObject.body}</p>
                <div class="post-actions">
                <ul class="post-actions reactions">
                <li><a href=""><i class="far fa-comment" data-action="comment"></i></a></li>
                <li><a href=""> <i class="far fa-heart" data-action="like"></i></a></li>
                <li class="options">
                    <a href=""data-action="more_options">....</a>
                    <ul class="dropdown-content ">
                        <li class="is-selectable"><a href="#" data-action="edit">Edit this Post</a></li>
                        <li class="is-selectable"><a href="#" data-action="delete">Delete</a></li>
                        <li class="is-selectable"><a href="#" data-action="copy">Copy link to this Post</a></li>

                    </ul>
                </li>
                </ul>



                </div>

            </div>
            `
            postList.prepend(div);
    }

     editPost(postObject) {
        const form = `
            <div id="edit-form-container">
            <div id="compose-area">
              <header>Edit Post</header>
              <form action="" id="edit_form" name="post" method="POST" data-post-id=${postObject.post_id} data-user-id=${postObject.user_id}>
                  <textarea maxlength = "280" required id="post-text" autofocus>${postObject.content}</textarea>
                  <button id="send-button" title="Post">Post</button>
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

     composeContainer() {
            let div = document.createElement("div");
            div.innerHTML = `
              <div id="postMenu">
              <header>
                  <ul>
                       <li>Post</li>
                      <i> <i class="fas fa-times" data-action="close"></i> </i>
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


}