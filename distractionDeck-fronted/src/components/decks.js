class Decks {
    constructor() {
        this.adapter = new DecksAdapter();
        this.pageBuilder = new PageBuilder();
        this.initiBindingsAndEventListeners();
        if (this.loggedIn()) {
            document.getElementById("overlay").style.display = "none"
            this.renderPost();
            this.afterInitiBindingsAndEventListeners();
        } else {
            document.getElementById("overlay").style.display = ""
            this.errorMessage("please login to continue")
        }

    }


    // finds elements on the page columns, alert, login_form, submit button
    initiBindingsAndEventListeners() {
        this.columns = [];
        this.alert = document.querySelector("#alert");
        this.login_form = document.querySelector("form#login_form");
        this.login_form.addEventListener("submit", this.loginForm.bind(this));
    }

    afterInitiBindingsAndEventListeners() {
        //Post button
        this.post_request = document.querySelector("input#post");
        this.post_request.addEventListener("click", this.postRequest.bind(this));
    // each post option ..
        this.post_option = document.querySelectorAll(".options");
        this.post_option.forEach(node => { node.addEventListener("click", this.postOption.bind(this)) });
    }

    // adds eventListener when when option menu appears. Calls PostAction when an item is clicked.
    postOption(e) {
        e.preventDefault();
        // displays the dropdown memu for post option
        const optionMenu = e.target.parentElement.nextElementSibling;
        if (optionMenu.style.display === "none") {
            optionMenu.style.display = "";
            const ul = e.target.parentElement.parentElement.querySelector(".dropdown-content").children[0];
        // needed to determine which button was press from the dropdown menu
            ul.addEventListener("click", this.postAction.bind(this));
        }else {
            optionMenu.style.display = "none";
         }

    }

    postAction(e) {
        e.preventDefault();
        // action selected
        const action = e.target.dataset.action;
        switch (action) {
            case "edit":
                // targeted postContainer
                const postContainerContent = e.target.closest(".content");
                // postObject
                const postObject = {
                    content:  postContainerContent.childNodes[3].innerText ,
                    post_id:  postContainerContent.dataset.postId ,
                    user_id:  postContainerContent.dataset.userId
                }
                const dropdown = e.target.closest(".dropdown-content");
                dropdown.style.display = "none";
                dropdown.parentElement.insertAdjacentHTML("afterend", editPost(postObject));
                document.querySelector("form#edit_form").addEventListener("submit", this.postEdits.bind(this))
                break;
            case ("delete"):
                // grabs the entire post container
                const postContainer = e.target.closest(".post");
                // creates an object to be send to the backend
                const obj = {
                    post_id: postContainer.dataset.postId,
                    user_id: postContainer.dataset.userId
                }
                this.destroyRequest(obj);
                break;
            case ("copy"):
                console.log("copy haven't been coded")
                break;
            default:
                console.log("default haven't been coded")
        }
    }


    async destroyRequest(obj) {
            // if the user is still loggedin a request is send to the server
            const response = this.loggedIn() && await this.adapter.deleteRequest(obj)
            //updates the page by removing the element
            document.querySelector(`.post[data-post-id=${CSS.escape(response.id)}]`).remove();
        }

    //process edits to post
    postEdits(e) {
        e.preventDefault();
        const input = e.target.querySelector("textarea");
        const newValue = input.value;
        const oldValue = input.defaultValue;
        if (newValue != oldValue) {
            const obj = {
                body: newValue,
                id: e.target.dataset.postId,
                user_id: e.target.dataset.userId
                }
            //preps obj for API
            this.putsRequest(obj);
        } else {
            alert("no change was made")
        }
    }

    async putsRequest(obj) {
        // sends the request if the user is loggedin
        if(this.loggedIn()){
            const post = await this.adapter.putsRequest(obj);
            if (!post.alert) {
                this.updateOnEdit(post);
            } else {
                this.errorMessage(post.alert);
            }
        } else {
            this.logout()
        }
    }

    updateOnEdit(obj) {
            // delete form
            document.querySelector("#edit-form-container").remove();
            // locates post
            let post = document.querySelector(`[data-post-id = ${CSS.escape(obj.id)}] #post-content`);
            // updates the post with the information send from the server
        post.innerText = obj.body;
        }

    // logouts a user
    logout() {
        console.log("... clearing cookies ")
        // clears cookies from the browser
        console.log("... refreshing the page ")
        // browser refresh
    }

    // checks if user is logged in by checking cookie
    loggedIn() {
        return (sessionStorage.getItem("login") === "true" ? true : false);
    }

    // login form and triggers
    loginForm(e) {
        e.preventDefault();
        const user = {
            username: e.target.elements["username"].value,
            password: e.target.elements["password"].value,
        };
        this.loginRequest(user);
        this.login_form.reset();
    }


    // process request and errors
    async loginRequest(obj) {
        const user = await this.adapter.loginRequest(obj);
        if (!user.alert){
        //calls function to setup preference cookie
        this.setCookies(user);

        // removes any previous alerts
        this.alert.style.display = "none";

        // removes login ovarlay
        document.getElementById("overlay").style.display = "none"
            this.renderPost();
        } else {
            this.errorMessage(user.alert);
        }
    }

    //creates cookies in order to store the user's login preferences
    setCookies(user) {
        sessionStorage['login'] = "true";
        setCookie("name", `${user.name}`);
        setCookie("email", `${user.email}`);
        setCookie("username", `${user.username}`);
        setCookie("id", `${user.id}`);
        setStorageItem("user", user);
    }

    // builds the page layout along with the side menu and the columns
    renderPost() {
        if (this.loggedIn()) {
            this.pageBuilder.columnList();
            this.pageBuilder.settingsMenu();
            this.pageBuilder.columns();
            this.pageBuilder.posts();
        } else {
            return false
        }
    }

    //processes post submisssion
    submission(e) {
        e.preventDefault();
        if (this.loggedIn) {
            const postData = {
                username: getCookie("username"),
                id: getCookie("id"),
                name: getCookie("name"),
                post: e.target.elements["post-text"].value,
            };
            this.postSubmitRequest(postData);
        } else {
            document.getElementById("overlay").style.display = "none"
            alert("You Must Be logged in to Submit Posts");
        }
    }

    // post form toggle
    postRequest(e) {
        e.preventDefault();
        const postForm = document.getElementById("post-menu")
        if (postForm.style.display === "none") {
            postForm.style.display = ""
            if (postForm.childElementCount < 1) {
                const dockedCompose = composeContainer();
                postForm.appendChild(dockedCompose);
                this.submit_request = document.querySelector("#compose-area form");
                this.submit_request.addEventListener('submit', this.submission.bind(this));
            }

        } else {
            postForm.style.display = "none"
        }
    }

    // post Submit Request, process request and errors
    async postSubmitRequest(obj) {
        const resp = await this.adapter.postRequest(obj);
        if (this.loggedIn()) {
            if (!resp.alert) {
                this.pageBuilder.post(resp)
                // const postForm = document.getElementById("post-menu");
                //clears the form
                document.querySelector("#post_form").reset();
                document.getElementById("post-menu").style.display = "none"
                //closes the compose column
                // postForm.style.display == "none"
            } else {
                this.errorMessage(resp.alert);
            }
        } else {
            alert("you must be login to post");
        }


    }

    errorMessage(message){
        const alert = document.getElementById("alert");
        alert.style.display = "flex";
        alert.innerText = ` ${message}`;
        throw `Error: ${message}`
        }


}

