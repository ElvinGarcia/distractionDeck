

class PageBuilder {
    constructor() {

    }

    columnList() {
        const columns = getcolumns();
        const ul = document.createElement('ul');
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];
            let li = document.createElement("li");
            li.innerHTML = `<a href="#" class="${column.id}"><i class="fas fa-${column.name.toLowerCase()}"></i>${column.name}</a>`
            ul.appendChild(li);
        }
        let columnList = document.getElementById("columnList");
        columnList.append(ul);
    }

         //settingsMenu Markup for the most of the time this would be static code
    settingsMenu(){
        const settingsMenu = `
                <ul>
                    <li> <a href="#"><i class="fas fa-plus"></i> Add column</a></li>
                    <li><a href="#"><i class="fas fa-angle-double-left"></i> Collapse</a></li>
                    <li><a href="#"> <i class="fas fa-users"></i> Accounts</a></li>
                    <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
                    <li><a href="#">${getCookie("name")} <span>${getCookie("username")}</ span></a></li>
                    <li> <a href="#">[Logo goes here]</a></li>
                    <li> <a href="/auth/twitter"><img
                                src="./fronted/assests/public/static/sign-in-with-twitter-medium.png"
                                alt="twitter-login" class="third-party-login"></a></li>
                    <li> <a href="/auth/twitter"><img
                                src="./fronted/assests/public/static/sign-in-with-twitter-medium.png"
                                alt="twitter-login" class="third-party-login"></a></li>
                </ul>`;

        // settings menu code
        let settings = document.getElementById("settingMenu");
        settings.innerHTML = settingsMenu;
     }

     // sets the columns on the page
    columns() {
        const columns = getcolumns();
        let columnGroup = document.getElementsByClassName("body-column-list")[0];
        for (let i = 0; i < columns.length; i++) {
            const obj = columns[i];
            let div = document.createElement("div");
            div.setAttribute("id",`${obj.name}`)
            div.innerHTML = `
                <div class="column-header ${obj.id}">
                    <i class="fas fa-${obj.name.toLowerCase()}"></i>
                    <h2>${obj.name}</h2>
                    <h3>${getCookie("username")}</h3>
                    <i class="fas fa-sliders-h"></i>
                </div>
                <div class="posts">
                </div>
            </div> `
            columnGroup.appendChild(div);
        }
    }

    // sets the posts on each column from ascending order
    posts() {
        const columns = getcolumns();
            //  Array(5) [ {…}, {…}, {…}, {…}, {…} ]
        for (let i = 0; columns.length > 0;  i++) {
            const columnObject = columns[i] ;
                //Object { id: 6, name: "Home", user_id: 2, created_at: "2020-10-07T10:40:31.774Z", updated_at: "2020-10-07T10:40:31.774Z", posts: (2) […] }
                // <div class="posts">
                for (let i = columnObject.posts.length-1; i > 0; i--) {
                const posts = document.getElementById(columnObject.name).lastElementChild ;

                const postObject = columnObject.posts[i];
                // Object { id: 3, body: "blah blah blah", user_id: 2, created_at: "2020-10-09T17:57:19.765Z", updated_at: "2020-10-09T17:57:19.765Z", column_id: 6 }
                let div = document.createElement("div");
                div.setAttribute("class", "post");
                div.innerHTML =`<div class="avatar"><a href="">[logo]</a></div>
                <div class="content">
                    <div class="post-title username"><a href="">${postObject.user.username}</a></div>
                    <p>${postObject.body}</p>
                    <div class="post-actions">
                    <a href=""><i class="far fa-comment"></i></a>
                    <a href="">  <i class="far fa-heart"></i></a>
                    <a href="">    <i class="options">...</i></a>
                    </div>
                </div>
                `
                    posts.appendChild(div)
                }
               return true
        }

    }

    // adds to new post to document [home]
    // retrieves user info from stored cookies
    post(post) {
    // get column
        const home = document.getElementById("Home")
        const postList = home.getElementsByClassName("posts")[0]

    // create post style with comments
     let div = document.createElement("div");
     div.setAttribute("class", "post");
     div.innerHTML =`<div class="avatar"><a href="">[logo]</a></div>
     <div class="content">
         <div class="post-title username"><a href="">${getCookie("username")}</a></div>
         <p>${post.body}</p>
         <div class="post-actions">
         <a href=""><i class="far fa-comment"></i></a>
         <a href="">  <i class="far fa-heart"></i></a>
         <a href="">    <i class="options">...</i></a>
         </div>
     </div>
     `
     //prepends post to column
        postList.prepend(div);
    }
}


