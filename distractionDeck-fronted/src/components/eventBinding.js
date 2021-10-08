class EventBinding {
    constructor() {
        // _type,_listner
        // type, listener[, options]);
        // this.type = _type;
        // this.listner = _listner;


        // this.login_form = document.querySelector("form#login_form");
        // this.post_request = document.querySelector("input#post");
        // this.post_actions = document.querySelectorAll(".post-actions.reactions");
        // this.logout_button = document.querySelector("#logout-botton");
        // this.log inForm()
    }

    setBinding({ type, target, adapter, user, _user_ }) {
        //  _user_ is the decks instance
        target.addEventListener(type, (e) => {
            e.preventDefault();
             const target = e.target;
            const obj = {
            'userName' : target.username.value,
            'password' : target.password.value
             }

           adapter.loginRequest(obj).then((resp) => {
                user.userName = resp.username;
                user.mail = resp.email;
                user.name = resp.name;
               user.iD = resp.id;
               return resp
            }
           ).then((resp) => {
               _user_.cookies.setLocalStorage(resp, _user_.user);

           })

       });

    }

    // postButton() {
    //     //Post button
    //     this.post_request.addEventListener("click", this.postRequest.bind(this));
    // }

    // postActions() {
    //     // all options on a post such as comment , like, more options and sub options
    //     this.post_actions.forEach(node => { node.addEventListener("click", this.postAction.bind(this)) });
    // }

    // logoutButton() {
    //        // logout button
    //        this.logout_button.addEventListener("click", this.logout.bind(this));
    // }



}