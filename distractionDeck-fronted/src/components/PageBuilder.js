
class PageBuilder {
    constructor() {
    }

    initLayout() {
        const columns = getcolumns();
        const ul = document.createElement('ul');
        for (let index = 0; index < columns.length; index++) {
            const columnName = columns[index].name;
            let li = document.createElement("li");
            li.innerHTML = `<a href="#"><i class="fas fa-${columnName.toLowerCase()}"></i>${columnName}</a>`
            ul.appendChild(li);
        }

        // ul.appendchild()

        //settingsMenu Markup for the most of the time this would be static code
        const settingsMenu = `
                <ul>
                    <li> <a href="#"><i class="fas fa-plus"></i> Add column</a></li>
                    <li><a href="#"><i class="fas fa-angle-double-left"></i> Collapse</a></li>
                    <li><a href="#"> <i class="fas fa-users"></i> Accounts</a></li>
                    <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
                    <li><a href="#">${getCookie("name")} <span>${getCookie("username")}</ span></a></li>
                    <li> <a href="#">[Logo goes here]</a></li>
                    <li> <a href="/auth/twitter"><img
                                src="./fronted/assests/public/static/sign-in-with-twitter-medium.png"
                                alt="twitter-login" class="third-party-login"></a></li>
                    <li> <a href="/auth/twitter"><img
                                src="./fronted/assests/public/static/sign-in-with-twitter-medium.png"
                                alt="twitter-login" class="third-party-login"></a></li>
                </ul>`;


// attachements
        // side columns lists
        let columnList = document.getElementById("columnList");
        columnList.append(ul);

        // settings menu code
        let settings = document.getElementById("settingMenu");
        settings.innerHTML = settingsMenu;
    }

    post() {

     }
}
