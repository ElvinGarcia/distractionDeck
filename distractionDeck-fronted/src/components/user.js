class User extends Storage {
  constructor() {
    super();
    this.username = "_username";
    this.mail = "_email";
    this.name =" _name";
    this.iD = "_id";
    }

     get userName(){
       return this.username;
     }

     set userName(newUsername) {
      return this.username= newUsername;
     }

   get email() {
     return this.mail;
     }

   set email(newEmail) {
     return this.mail = newEmail;
   }

  get id() {
    return this.iD;
   }

  get loggedin() {
        // returns a boolean
    return super.loggedIn
    }

  get logOut() {
    // delete all cookies
    // send request to the server
    // refresh the page inorder to display the login
  }


}

