
class PageBuilder {
    constructor() {

    }

    initLayout() {
        const temp = `
        <!-- search bar -->
        <input type="button" value="Post" id="post">
        <input type="text" id="search" placeholder="Search..">

        <div class="main-columns-list">
            <ul>
                <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
                <li><a href="#"><i class="fas fa-concierge-bell"></i>Notification</a></li>
                <li><a href="#"><i class="far fa-user"></i>User</a></li>
                <li><a href="#"><i class="fas fa-at"></i>Mentions</a></li>
                <li><a href="#"><i class="fas fa-user-friends"></i>Followers</a></li>
                <li><a href="#"><i class="fas fa-fire"></i>Trending</a></li>
                <li><a href="#"><i class="fas fa-envelope"></i>Messages</a></li>
                <li><a href="#"><i class="far fa-clock"></i>Scheduled</a></li>
            </ul>
            <div class="menu">
                <ul>
                    <li> <a href="#"><i class="fas fa-plus"></i> Add column</a></li>
                    <li><a href="#"><i class="fas fa-angle-double-left"></i> Collapse</a></li>
                    <li><a href="#"> <i class="fas fa-users"></i> Accounts</a></li>
                    <li><a href="#"><i class="fas fa-cog"></i> Settings</a></li>
                    <li><a href="#">${getCookie("name")} <span>${getCookie("email")}</ span></a></li>
                    <li> <a href="#">[Logo goes here]</a></li>
                    <li> <a href="/auth/twitter"><img
                                src="./fronted/assests/public/static/sign-in-with-twitter-medium.png"
                                alt="twitter-login" class="third-party-login"></a></li>
                    <li> <a href="/auth/twitter"><img
                                src="./fronted/assests/public/static/sign-in-with-twitter-medium.png"
                                alt="twitter-login" class="third-party-login"></a></li>
                </ul>
            </div>
            <!-- End of Columns list -->
        </div>   `;
        let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.innerHTML = temp;

     }


}
