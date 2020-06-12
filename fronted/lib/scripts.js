

// import {test} from "./modules/overlay.js";
import * as Module from './modules/overlay.js'
// import { m } from './modules/message.js';

Module.test("Doing what works Doing what matters");



document.querySelector(".main-columns-list>ul").addEventListener("click", () => {
 import("./modules/message.js").then((Module) => {
  console.log(Module);
 });
});

