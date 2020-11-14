# Rails Backend with a Javacript Frontend
    Most developers know Ruby on Rails also refered such just Rails, as a monolith framework where one app hosts  it all. These type of applications have its place in ecosystem on web developement. Just as it is true for Rails having its advantage over other type of framework it also have it's drawbacks. As a result to some of the drawbacks you might encouter when using Rails as a monilith application framework Rails also offers an API (Application Programming Interface) version.

 ## Advantages of using Rails as an API
    Some of the advantage of using Rails as an API is that it frees up the frontend to other languages. This approch allows for more choices and options. By allowing the frontend to be detached we are able to host the backend with a different service provider than our front end.

## How it works
    Since basically we are running 2 seperate parts (backend and frontend) on part, typically the frontend makes a request to the backend. This is ussually called an API call. Once the API call is rceived the backend process this request and returns a status code. This code is used by the backend to signal if the request was successful or any other status that it wants to convey to the frontend. Given that the initial request was successful, the fronted proceeds in sending the user's or the intended request to the API and in return the API process the necessary actions required. Such actions include send back data to the frontend typically in the form of a hash or JSON.
    The frontend takes the response and process it, typically by display it the user or other actions based on the data.

## Examples
    On the Distravction Deck Single Page Application (SPA) I'm using rails as an API while using Javascript, CSS and HTML on the frontend on the client side. The following interactions take place once the client logs in.
- On the initial page the client logs in with their _username_  and _password_
- The _username_ and _password_ is sent to the backend
- Once the _username_ and _password_ is received by the Rails API the following takes place
  - Rails finds the user in the database
  - validates the password given againt the user's password hash on file.
  - Once the user passes the validation process the Rails API parses the user's table data into JSON format and sends back to the client
- Once the client receives the data the SPA loads and starts to display all the relevant information received.
