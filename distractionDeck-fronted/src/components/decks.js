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
            // alert("you are not logged in")
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
        this.post_option.forEach(node => { node.addEventListener("click", this.postOption)})
    // this.post_option.addEventListener("click", this.postOption.bind(this));
    }

    // left here.. need to code a small popup menu with options on what to do to each post CRUD
    postOption(e) {
        e.preventDefault();
        console.log(e)

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
        //calls function to setup preference cookie
        this.setCookies(user);

        // removes any previous alerts
        this.alert.style.display = "none";

        // removes login ovarlay
        document.getElementById("overlay").style.display = "none"
        this.renderPost();
    }

    //creates a sessions & cookies in order to store user login preferences
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
            alert("You Must Be login to Submit Posts");
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
            this.pageBuilder.post(resp)
            // const postForm = document.getElementById("post-menu");
            //clears the form
            document.querySelector("#post_form").reset();
            document.getElementById("post-menu").style.display = "none"
            //closes the compose column
            // postForm.style.display == "none"
        } else {
            alert("you nust be login to post");
        }


    }
}