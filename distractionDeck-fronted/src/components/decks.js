class Decks {
    constructor() {
        this.adapter = new DecksAdapter();
        this.initiBindingsAndEventListeners();
        // make this into a conditional statement
        if (this.loggedIn()) {
            document.getElementById("overlay").style.display = "none"
        }


    }

    initiBindingsAndEventListeners() {
        this.columns = [];
        this.alert = document.querySelector("#alert");
        this.login_form = document.querySelector("form#login_form");
        this.login_form.addEventListener("submit", this.loginForm.bind(this));
    }

    loggedIn() {
        return (sessionStorage.getItem("session_login") === "login = true" ? true : false);
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
        const response = await this.adapter.loginRequest(obj);
        // removes any previous alerts
        debugger;
        this.alert.style.display = "none";

        //calls function to setup preference cookie
        this.setPreference(response)
        // setPreference(response["data"]["attributes"])

        // removes login ovarlay
        document.getElementById("overlay").style.display = "none"

        this.renderPost(obj)
    }

    setPreference(obj) {
        //creates a session cookie inorder to store user login preferences
       // sessionStorage['session_login'] = "login = true";
    }

    renderPost(obj) {
        // starts rendering the posts
        const user = obj;
        const posts = obj.posts;
        const columns = obj.columns;

        //     user.columns.forEach(element => { this.columns.push(element) });
        //  console.log(this.columns)

        // let p = document.createElement("p");
        //    p.innerText = resp.alert;
        //    this.alert.appendChild(p);
        //    this.alert.style.display = "block";
    }
}
