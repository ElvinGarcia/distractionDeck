const API = "https://localhost/api/v1/";

class DecksAdapter extends Storage {
  constructor() {
    super();
    this.baseUrl = API;
  }

  async loginRequest(obj) {
    return await this.serverRequest(obj, "login");
    // const c = await this.serverRequest(obj, "login");
    // debugger

  }

  async postRequest(obj) {
      return await this.serverRequest(obj, "posts");

  }

  async putsRequest(obj) {
      return await serverRequest(obj, `posts/${obj.id}`, "PUT");

  }

  async deleteRequest(obj) {
      return await serverRequest(obj, `posts/${obj.post_id}`, "DELETE");

  }


  async serverRequest(obj, path, method = "POST") {
        const resp =  await fetch(this.baseUrl + path, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      })

    this.validateResponse(resp);
    const jsonResponse = this.responseAsJson(resp);
    return this.jsonResponsevalidation(jsonResponse);
  }


    // validation and server response classes
  validateResponse(response) {
    if(!response.ok){
      throw Error (response.statusText);
    }
    return response
  }

  responseAsJson(response) {
    return response.json();
  }

  jsonResponsevalidation(jsonresponse) {
    if (Array.isArray(jsonresponse)){
      throw Error("The respose Object is that of an Array");
    }
    return jsonresponse
  }


}



