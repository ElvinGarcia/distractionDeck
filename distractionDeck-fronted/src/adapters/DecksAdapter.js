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
    }).then((response) => response.json());
  }


  postRequest(obj) {
    return fetch(this.baseUrl + "/api/v1/posts", {
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
      .then((response) => response.json());
  }

  putsRequest(obj) {
    return fetch(this.baseUrl + `/api/v1/posts/${obj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    }).then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw `Error: ${response.status}`;
      }
    })
    .then((response) => response.json())
    ;
  }


  deleteRequest(obj) {
      return fetch(this.baseUrl + `/api/v1/posts/${obj.post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      }).then((response) => {
        if (response.ok) {
          return response;
        } else {
          // display ${response.Text} when error occurs 404
          throw `Error: ${response.status}`
        }
       }).then((response) => response.json());
    }


}



