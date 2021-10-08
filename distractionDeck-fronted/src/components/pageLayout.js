
class PageLayout   {
    constructor() {

        // this.user = super.name;
        // this.columnSideList = document.getElementById("columnList");
        // this.columnList(); // load the side columns menu
        // this.settingsMenu(); // load the settings side menu towards the buttom
        // this.columns(); // sets the columns on the page
    }


    // columnList ()  {
    //     const columns = super.getcolumns;
    //     // columns || console.log("Login is required");
    //     const ul = document.createElement('ul');
    //     for (let index = 0; index < columns.length; index++) {
    //         const column = columns[index];
    //         let li = document.createElement("li");
    //         li.innerHTML = `<a href="#" id="${column.id}"><i class="fas fa-${column.name.toLowerCase()}"></i>${column.name}</a>`
    //         ul.appendChild(li);
    //     }
    //     this.columnSideList.append(ul);
    // }


    // settingsMenu(){
    //     const settingsMenu = `
    //     <ul>
    //                 <li> <a href="#"><i class="fas fa-plus"></i> Add column</a></li>
    //                 <li><a href="#"><i class="fas fa-angle-double-left"></i> Collapse</a></li>
    //                 <li><a href="#"> <i class="fas fa-users"></i> Accounts</a></li>
    //                 <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
    //                 <li><a href="#">${super.name} <span>${super.name}</ span></a></li>
    //                 <li><a href="#">[Logo goes here]</a></li>
    //                 <li><a href="#" id="logout-botton">LogOut</a></li>
    //             </ul>`;

    //     // settings menu code
    //     let settings = document.getElementById("settingMenu");
    //     settings.innerHTML = settingsMenu;
    //  }


    // columns() {
    //     const columns = super.getcolumns;
    //     columns ||  console.log("Login is required")
    //     let columnGroup = document.getElementsByClassName("body-column-list")[0];
    //     for (let i = 0; i < columns.length; i++) {
    //         const obj = columns[i];
    //         let div = document.createElement("div");
    //         div.setAttribute("id", `${obj.name}`)
    //         div.innerHTML = `
    //             <div class="column-header ${obj.id}" id="${obj.id}">
    //             <i class="fas fa-${obj.name.toLowerCase()}"></i>
    //                 <h2>${obj.name}</h2>
    //                 <h3 class="username h3">${getCookie("username")}</h3>
    //                 <i class="fas fa-sliders-h"></i>
    //             </div>
    //             <div class="posts">
    //             </div>
    //         </div> `
    //         columnGroup.appendChild(div);
    //     }
    // }



}
