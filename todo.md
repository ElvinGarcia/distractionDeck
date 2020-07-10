

# font end
 ## create a signup or create account overlay
   [x] move login button to the right
   [x] round the edges on the fieldtypes
   [x] overlay connects to rails backend
      - set a debugger on route.rb to make sure its connecting
   [] overlay is triigger if there are no session cookies saved


<!-- need to set a browser cookie with the rails session Id 
   which will be used to compare both session id when making req.
   Will set an expiration date of 60 days.
 -->


# backend 
 ## routes
  [x] creaate seperate route for login
  [] set a seperate controller for the login session and procedure   
  [] set a remember_digest session
  
# Requirements to Schedule a Review
   [x] A link to your project repo, with code for your Rails backend and HTML / CSS / JavaScript frontend.
   [x] A README.md file describing your application
   [] A Blog Post about your application  
   [] A 2-4 minute Video Demo introducing your application


# left @
[x] js geneate new columns under column.js
[x] js geneate individual post under post.js
[ ] create the request to the rails server BASE_URL/login 
  [] create backend request into a class
  [] look into making creating these func into a class to meet requirement 

# notes
 ## backend 
 [] social belongs to user through columns
    column belongs to social
    column belongs to user
user has_many social through columns


