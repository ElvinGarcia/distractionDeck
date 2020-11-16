const API = "http://localhost:3000";

class DecksAdapter {
  constructor() {
    this.baseUrl = API;
  }

  loginRequest(obj) {
    return fetch(this.baseUrl + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          throw `Error: ${response.status}`;
        }
      })
      .then((response) => response.json())
      ;
  }

  // left here making a request to RAILS API to submit a post
  postRequest(obj) {
    return fetch(this.baseUrl + "/postRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((response) => {
       if (response.ok) {
         return response;
       } else {
         throw `Error: ${response.status}`
       }
      })
  }


}
