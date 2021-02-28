class Storage{
    constructor() {

    }


setStorageItem(stringKey, obj) {
    const key = stringKey;
    return localStorage.setItem(key, JSON.stringify(obj));
}

 getStorageItem(stringKey) {
    const key = stringKey;
    return JSON.parse(localStorage.getItem(key) ?? false);

}

// why I'm I using var ?
 getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

   setCookie(cname, cvalue, exdays=365) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";" + "SameSite" + "=" + "Lax" + ";" + "Secure";
  }

}