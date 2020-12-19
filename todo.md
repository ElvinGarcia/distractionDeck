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
[] add a diaglog popup when username or passwords are incorrect


# backend
[x] Create
    - create a form that would appear when the user presses the post button
[x] Read
[] Update
    - set an edit button for each tweet that would display an edit form when pressed
[] Delete
    - display and delete button for each tweet.

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
[] create backend request into a class
[] look into making creating these func into a class to meet requirement

# notes

## backend

[x] social belongs to user through columns
column belongs to social
column belongs to user
user has_many social through columns
