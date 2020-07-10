

export class Overlay {
        constructor(){
        this.overlay = document.getElementById("overlay");
         }

        get hidden() {
         this.overlay.style.visibility = "hidden";
        }

        get show(){
            this.overlay.style.visibility = "";
        }

       }