

function columns(name){
    const columns = document.querySelector("div.body-column-list");
    const div = document.createElement("div");
    div.setAttribute("class",name);
    columns.appendChild(div);
}