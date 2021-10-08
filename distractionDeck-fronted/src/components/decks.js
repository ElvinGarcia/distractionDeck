class Decks {
    constructor() {
        this.cookies = new Storage();
        // this.sanitize = new Sanitizer();
        this.eventBinding = new EventBinding();
        this.user = new User();
        this.overlay = new Overlay();
        this.validation = new Validation();
        this.adapter = new DecksAdapter();
        this.columns = new Columns();
        this.post = new Post();
        this.pageLayout = new PageLayout();
        this.loginScreen();
    }

    loginScreen() {
         if (this.user.loggedin) {
          this.overlay.off
        } else {
            const loginForm = this.overlay.on;
            this.eventBinding.setBinding({ type: "submit", target: loginForm, adapter: this.adapter, user: this.user, _user_: this  });
        }

    }




    // postAction(e) {
    //     // action selected
    //     const action = e.target.dataset.action;
    //     switch (action) {
    //         case "edit":
    //             // targeted postContainer
    //             const postContainerContent = e.target.closest(".content");
    //             // postObject
    //             const postObject = {
    //                 content: postContainerContent.childNodes[3].innerText,
    //                 post_id: postContainerContent.dataset.postId,
    //                 user_id: postContainerContent.dataset.userId
    //             }
    //             this.dropdown = e.target.parentElement.parentElement;
    //             // dropdown.parentElement.insertAdjacentHTML("afterend", editPost(postObject));
    //             this.dropdown.parentElement.insertAdjacentHTML("afterend", editPost(postObject));
    //             this.edit_form = document.querySelector("#compose-area > form");
    //             this.edit_form.addEventListener("submit", this.postEdits.bind(this));
    //             e.preventDefault();
    //             break;
    //         case ("delete"):
    //             // grabs the entire post container
    //             const postContainer = e.target.closest(".post");
    //             // creates an object to be send to the backend
    //             const obj = {
    //                 post_id: postContainer.dataset.postId,
    //                 user_id: postContainer.dataset.userId
    //             }
    //             this.destroyRequest(obj);
    //             break;
    //         case ("copy"):
    //             console.log("copy haven't been coded")
    //             break;
    //         case ("close"):
    //             console.log("toggle or destroy")
    //                 break;
    //         case ("like"):
    //             debugger
    //             const post = e.target.closest(".post");
    //             column = document.getElementById("Favorite")
    //             e.preventDefault
    //             console.log("like was selected do something")
    //             break;
    //         case ("comment"):
    //             console.log(`${action} was selected`)
    //             break;
    //         case ("more_options"):
    //             //toggle the hidden menu when the elipse is pressed
    //             e.target.parentElement.querySelector(".dropdown-content").classList.toggle("toggle_hide");
    //             e.preventDefault();
    //             break;
    //         default:

    //     }
    // }


    // async destroyRequest(obj){
    //         // if the user is still loggedin a request is send to the server
    //     const response = this.loggedIn() && await this.adapter.deleteRequest(obj)
    //         //updates the page by removing the element
    //         document.querySelector(`.post[data-post-id=${CSS.escape(response.id)}]`).remove();
    //     }

    // //process edits to post
    // postEdits(e) {
    //     e.preventDefault();
    //             const input = e.target.querySelector("textarea");
    //             const newValue = input.value;
    //             const oldValue = input.defaultValue;
    //             if(newValue != oldValue) {
    //         const obj = {
    //             body: newValue,
    //             post_id: e.target.dataset.postId,
    //             user_id: e.target.dataset.userId
    //         }
    //         //preps obj for API
    //         this.putsRequest(obj);
    //             } else {
    //                 console.log("no change were made")
    //                 e.preventDefault();
    //             }

    // }

    // async putsRequest(obj) {
    //     // sends the request if the user is loggedin
    //     if(this.loggedIn()){
    //         const post = await this.adapter.putsRequest(obj);
    //         if (!post.alert) {
    //             this.updateOnEdit(post);
    //         } else {
    //             this.errorMessage(post.alert);
    //         }
    //     } else {
    //         this.logout()
    //     }
    // }

    // updateOnEdit(obj) {
    //         // delete form
    //         document.querySelector("#edit-form-container").remove();
    //         // locates post
    //         let post = document.querySelector(`[data-post-id = ${CSS.escape(obj.id)}] #post-content`);
    //         // updates the post with the information send from the server
    //     post.innerText = obj.body;
    //     }

    // // logout user
    // logout() {
    //     if (confirm("Are you sure you want to logout!")) {
    //         console.log("... deleting cookies ... yum yum")
    //         document.cookie = 'elvin; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; secure';
    //         document.cookie = 'username; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; secure';
    //         document.cookie = 'email; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; secure';
    //         sessionStorage.login = false;
    //         console.log("... refreshing the page ")
    //         location.reload();
    //       } else {
    //         console.log("user cancel")
    //       }

    // }

    // // checks if user is logged in by checking cookie
    // loggedIn() {
    //     return (sessionStorage.getItem("login") === "true" ? true : false);
    // }


    // // overlay toggle
    // overlay() {
    //     document.querySelector(".overlay").classList.toggle("toggle_hide")
    // }

    // // login form and triggers
    // loginForm(e) {
    //     e.preventDefault();
    //     const user = {
    //         username: e.target.elements["username"].value,
    //         password: e.target.elements["password"].value,
    //     };
    //     this.loginRequest(user);
    //     this.login_form.reset();
    // }


    // // process request and errors
    // async loginRequest(obj) {
    //     const user = await this.adapter.loginRequest(obj);
    //     console.log(user)
    //     if (!user.alert){
    //     //calls function to setup preference cookie
    //     this.setCookies(user);

    //     // removes any previous alerts
    //     this.alert.style.display = "none";

    //     // removes login overlay
    //     this.overlay()
    //     // document.getElementById("overlay").style.display = "none"
    //         this.renderPost();
    //     // adds eventListeners binding to new elements
    //     this.loggedIn() && this.afterInitiBindingsAndEventListeners();
    //     } else {
    //         this.errorMessage(user.alert);
    //     }
    // }

    // //creates cookies in order to store the user's login preferences
    // setCookies(user) {
    //     sessionStorage['login'] = "true";
    //     setCookie("name", `${user.name}`);
    //     setCookie("email", `${user.email}`);
    //     setCookie("username", `${user.username}`);
    //     setCookie("id", `${user.id}`);
    //     setStorageItem("user", user);
    // }

    // // builds the page layout along with the side menu and the columns
    // renderPost() {
    //     if (this.loggedIn()) {
    //         this.pageBuilder.columnList();
    //         this.pageBuilder.settingsMenu();
    //         this.pageBuilder.columns();
    //         this.pageBuilder.posts();
    //     } else {
    //         return false
    //     }
    // }

    // //processes post submisssion
    // submission(e) {
    //     e.preventDefault();
    //     if (this.loggedIn) {
    //         const postData = {
    //             username: getCookie("username"),
    //             id: getCookie("id"),
    //             name: getCookie("name"),
    //             post: e.target.elements["post-text"].value,
    //         };
    //         // if left expression is true it gets executed otherwise the one on the right does
    //         this.postSubmitRequest(postData) &&  this.postRequest(e)

    //     } else {
    //         this.overlay()
    //         // document.getElementById("overlay").style.display = "none"
    //         alert("You Must Be logged in to Submit Posts");
    //     }
    // }

    // // post form toggle when Post button is pressed
    //  postRequest(e) {
    //     e.preventDefault();
    //     const postForm = document.querySelector("#post-menu")
    //     if (this.loggedIn()) {
    //         if (postForm.classList.contains("toggle_hide") && !postForm.childElementCount ) {
    //             const dockedCompose = composeContainer();
    //             postForm.appendChild(dockedCompose);
    //             this.submit_request = document.querySelector("#compose-area form");
    //             // close X when editing the form
    //             this.postContainerHeader =  document.querySelector("[data-action=" + CSS.escape("close") + "]").parentElement;
    //             this.submit_request.addEventListener('submit', this.submission.bind(this))
    //             this.postContainerHeader.addEventListener('click', this.postRequest.bind(this));
    //             postForm.classList.toggle("toggle_hide");
    //         } else {
    //         postForm.classList.toggle("toggle_hide");
    //         }
    //     }
    // }

    // // post Submit Request, process request and errors
    // async postSubmitRequest(obj) {
    //     const resp = await this.adapter.postRequest(obj);
    //     if (this.loggedIn()) {
    //         if (!resp.alert) {
    //             createPost(resp);
    //             // rebinds newly created post to eventslistners
    //             this.afterInitiBindingsAndEventListeners()
    //             // this.pageBuilder.post(resp)
    //             //clears the form
    //             document.querySelector("#post_form").reset();
    //             return true
    //         } else {
    //             this.errorMessage(resp.alert);
    //             return false
    //         }
    //     } else {
    //         alert("you must be login to post");
    //     }


    // }

    // errorMessage(message){
    //     const alert = document.querySelector("#alert");
    //     alert.style.display = "flex";
    //     alert.innerText = ` ${message}`;
    //     throw `Error: ${message}`
    //     }


}

