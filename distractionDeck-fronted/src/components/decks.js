
class Decks {
    constructor() {
        this.adapter = new DecksAdapter();
        this.initiBindingsAndEventListeners();
    }

    initiBindingsAndEventListeners() {
        this.alert = document.querySelector("#alert");
        this.login_form = document.querySelector("form#login_form");
        this.login_form.addEventListener('submit', this.loginForm.bind(this));
    }

    loginForm(e) {
        e.preventDefault()
        const user = {
            username: e.target.elements["username"].value,
            password: e.target.elements["password"].value
        }
        this.loginRequest(user)
        this.login_form.reset();
    }

    async loginRequest(obj) {
        const resp = await this.adapter.loginRequest(obj)
        if (resp.alert === undefined) {
            console.log("success", resp)
            // this.alert.style.display = "none";
            // sessionStorage['session_login'] = "login = true";
            // console.log("reading...", sessionStorage.getItem("session_login"))

        } else {
            let p = document.createElement("p");
            p.innerText = resp.alert;
            this.alert.appendChild(p);
            this.alert.style.display = "block";
        }
    }




}
