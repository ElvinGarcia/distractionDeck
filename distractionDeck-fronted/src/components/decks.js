class Decks {
    constructor() {
        this.adapter = new DecksAdapter();
        this.initiBindingsAndEventListeners();
        this.pageBuilder = new PageBuilder();
        if (this.loggedIn()) {
            document.getElementById("overlay").style.display = "none"
            this.renderPost();
        }

    }

    initiBindingsAndEventListeners() {
        this.columns = [];
        this.alert = document.querySelector("#alert");
        this.login_form = document.querySelector("form#login_form");
        this.login_form.addEventListener("submit", this.loginForm.bind(this));
    }

    loggedIn() {
        return (sessionStorage.getItem("login") === "true" ? true : false);
    }

    loginForm(e) {
        e.preventDefault();
        const user = {
            username: e.target.elements["username"].value,
            password: e.target.elements["password"].value,
        };
        this.loginRequest(user);
        this.login_form.reset();
    }
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

    setCookies(user) {
        //creates a session cookie inorder to store user login preferences
        sessionStorage['login'] = "true";
        setCookie("name", `${user.name}`);
        setCookie("email", `${user.email}`);
        setCookie("username", `${user.username}`);
        setCookie("id", `${user.id}`);
        setStorageItem("user", user);
    }

    renderPost() {
        this.pageBuilder.initLayout();
        this.pageBuilder.post();
        // starts rendering the posts
        // this.pageBuilder.mainMenu(user.columns, link);
        // this.pageBuilder.column();

        //     user.columns.forEach(element => { this.columns.push(element) });
        //  console.log(this.columns)

        // let p = document.createElement("p");
        //    p.innerText = resp.alert;
        //    this.alert.appendChild(p);
        //    this.alert.style.display = "block";
    }
}
