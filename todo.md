# was fixing the popup post option menu.
#  _menu.css line 102

# font end

## create a signup or create account overlay

[x] move login button to the right
[x] round the edges on the fieldtypes
[x] overlay connects to rails backend - set a debugger on route.rb to make sure its connecting
[x] alert on the login page when the authentication fails
[x] add associations
[x] auto generate columns only when a new user is created (user line24)
[x] add foreign keys to tables now that the model associations are set
[x] getting the columns name in the response to the client. (most be something with FASTJSON)
[x] update the current data to reflect the current association
[x] overlay is triigger if there are no session cookies saved
[x] display the error message from the server, currently logins when the server is not running
[x] how to create a cookie on the client side
[x] how to read a cookie on the client side
[x] many posts through columns accessed via to_json
[x] structured JSON response
[x] set cookies and session preferences
[x] read from the cookie the username and email instead of the promise inorder to maintain user info during refresh
[x] how to create and read multiply cookies
[x] how to add a post to the correct user and to the home column on creation
[x] update json serializer response
[x] create each column first and set on id to each one on the page correspoding to the json id
[x] create the column on the page to match the id with that of the column list.
[x] take each post find the id number of the column on the page and attach it to that column
[*] swap local storage and session storage.
[x] make the columns scrollable horizontal and vertical
[x] posts need to load from latest to oldest
[x] add a diaglog popup when username or passwords are incorrect
[] on Page refresh post created while logged are not displayed

# frontend
- Create
    [x] create a form that would appear when the user presses the post button
[x] Read
- Update
    [x] set an edit button for each tweet that would display an edit form when pressed
    [x] create a "data[]post[]id" for each post that will be used to locate it on the server
        [x] along with the above the user_id will be sent along
        [x] the edited text too
    [x] Backend
      [x] makes sure the user is still logged in
      [x] locate the post in the database
      [x] compare the received post and the database post for changes
        [x] if changes are made update the data base
        [x] send request back to the front end that the changes persisted along with the text
        [x] the front end will display the changes in the home columns towards the top and the old post will be updated
      [x]   if no changes are detected
        [x] send request back with error message that the changes didn't persist to the DB
- Delete
    [x] display and delete button for each post.
      [x] the post_id along with user_id will be send to the API
      [x] the API will verified that the user is logged in and the post belong to the user by locating the post
      [x] the post will be deleted from the DB
      [x] reply will be sent to the client that the post was destroyed
      [x] the client will delete the post from the home column
      [] menu disappeared when clicked or hover out
      [] error messages are being displayed on the console and on the alert banner
      [] `document.addEventListener("DOMContentLoaded", ready);
// not "document.onDOMContentLoaded = ..."`
          [https://javascript.info/onload-ondomcontentloaded](javascript.info)
          [https://css-tricks.com/snippets/jquery/run-javascript-only-after-entire-page-has-loaded/](CSS-Tricks)
          [https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event](MDN)
          [https://www.w3schools.com/jsref/coll_doc_links.asp](w3school)
          [https://stackoverflow.com/questions/807878/how-to-make-javascript-execute-after-page-load](stackoverflow)
          [https://stackoverflow.com/questions/8922899/get-all-href-links-in-dom](Get all href links in DOM)
## routes

[x] creaate seperate route for login
[x] set a seperate controller for the login session and procedure
[x] set a remember_digest session

# Requirements to Schedule a Review

[x] A link to your project repo, with code for your Rails backend and HTML / CSS / JavaScript frontend.
[x] A README.md file describing your application
[x] A Blog Post about your application
[] A 2-4 minute Video Demo introducing your application

# left @

[x] js geneate new columns under column.js
[x] js geneate individual post under post.js
[x] create the request to the rails server BASE_URL/login

# notes
[] consolidate all clickable items into one click event triggering a switch function
  `ul.forEach(e=> e.addEventListener("click", e=> {console.log(e.target)}))`

## backend

[x] social belongs to user through columns
column belongs to social
column belongs to user
user has_many social through columns
