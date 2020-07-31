const API = "http://localhost:3000"

class DecksAdapter {
    constructor() {
        this.baseUrl = API;
    }

    loginRequest(obj) {
        return fetch(this.baseUrl + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        }).then((response) => response.json());
    }


    getDecks() {

    }


}