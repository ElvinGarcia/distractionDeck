class Storage {
  constructor(_userObj ="") {
    // user obj
    // this.name = _userObj.name;
    // this.user  = _userObj;
  }

  get loggedIn() {
    // converts return to a booleam
    return !!this.checkLocalStorage
  }

  get checkLocalStorage() {
    // there should be a cookie with "loggedIn":true|false
     return this.getLocalStorage("loggedIn");
  }

  getLocalStorage(cname) {
   return localStorage.getItem(cname);
    // needs refractoring to ES6 style
    // const name = cname + "=";
    // const arr = document.cookie.split(';');
    // // refractor using forEach
    // for(let i = 0; i < arr.length; i++) {
    //   let element = arr[i];
    //   while (element.charAt(0) == ' ') {
    //     element = element.substring(1);
    //   }
    //   if (element.indexOf(name) == 0) {
    //     return element.substring(name.length, element.length);
    //   }
    // }
    // return "";
  }



  setLocalStorage(resp, user) {
    //creates cookies in order to store the user's login preferences
    // sessionStorage.setItem("lastname", "Smith"); <-- stored until the browser is closed
    // document.cookie = "someCookieName=true; expires=Fri, 31 Dec 9999 23:59:59 GMT, SameSite=secure"; <-- stored until exp date
    localStorage.setItem('loggedIn','true'); // indefitenetely stored
    // localStorage.setItem('name',`${user.name}`);
    // localStorage.setItem('email',`${user.email}`);
    // localStorage.setItem('username',`${user.username}`);
    // localStorage.setItem('id', `${user.id}`);
    localStorage.setItem(`resp`, JSON.stringify(resp));
  }


  set setCookie(obj) {
    let exdays = 365
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";" + "SameSite" + "=" + "Lax" + ";" + "Secure";
  }
  //  storageItem(stringKey) {
  //   const key = stringKey;
  //   return localStorage.setItem(key, JSON.stringify(obj));
  // }


  // get storageItem() {
  //   const key = stringKey;
  //   return JSON.parse(localStorage.getItem(key) ?? false);
  // }

  // // why I'm I using var ?
  // get cookie() {
  //   var name = cname + "=";
  //   var decodedCookie = decodeURIComponent(document.cookie);
  //   var ca = decodedCookie.split(';');
  //   for (var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }





}


