// import {test} from "./modules/overlay.js";
// import { m } from './modules/message.js';
import * as Overlay from './modules/overlay.js'
import * as Post from './modules/post.js'

const BASE_URL = "http://localhost:3000"; 

window.onload = ()=>{
    eventListerners();
}

function eventListerners() {
    const login_form = document.getElementById("login_form");
    login_form.addEventListener("submit", (e)=>{loginForm(e);});
}

//  hiddes the init overlay
function loginForm(e) {
    e.preventDefault();
    Overlay.hiddenjs();
 }
