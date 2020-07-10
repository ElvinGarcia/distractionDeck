// import {test} from "./modules/overlay.js";
// import { m } from './modules/message.js';
import * as Post from './modules/post.js'
import * as Login from './modules/overlay.js'
import * as Request from './modules/request.js'



 const BASE_URL = "http://localhost:3000"; 

window.onload = ()=>{
    eventListerners();
}

function eventListerners() {
    const login_form = document.querySelector("form#login_form");
    login_form.addEventListener("submit", (e)=>{loginForm(e);});
}


//  hides the init overlay
 function loginForm(e) {
    e.preventDefault();
    let header = new Request.FetchRequest("POST", {
     username: e.target.querySelector("#username").value,
     password: e.target.querySelector("#password").value,
    });
    Request.FetchRequest.send(BASE_URL+"/login", header).then( (data)=>{console.log(data)})
    let overlay = new Login.Overlay();
    overlay.hidden;
    
    

 }