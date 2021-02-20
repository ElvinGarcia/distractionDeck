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
    .then(this.validateResponse)
    .then(this.responseAsJson)
    .then(this.jsonResponsevalidation)
    .catch((error) => { console.error('Error:', error); })
  }


  postRequest(obj) {
    return fetch(this.baseUrl + "/api/v1/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then(this.validateResponse)
    .then(this.responseAsJson)
    .then(this.jsonResponsevalidation)
    .catch((error) => { console.error('Error:', error); })
  }

  putsRequest(obj) {
    return fetch(this.baseUrl + `/api/v1/posts/${obj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
      .then(this.validateResponse)
    .then(this.responseAsJson)
    .then(this.jsonResponsevalidation)
    .catch((error) => { console.error('Error:', error); })
  }


  deleteRequest(obj) {
      return fetch(this.baseUrl + `/api/v1/posts/${obj.post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      })
        .then(this.validateResponse)
      .then(this.responseAsJson)
      .then(this.jsonResponsevalidation)
      .catch((error) => { console.error('Error:', error); })

    }

  validateResponse(response) {
    if(!response.ok){
      throw Error (response.statusText);
    }
    return response
  }

  responseAsJson(response){
    return response.json();
  }

  jsonResponsevalidation(jsonresponse) {
    if (Array.isArray(jsonresponse)){
      throw Error("The respose Object is that of an Array");
    }
    return jsonresponse
  }


}



