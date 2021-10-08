class Overlay  {
    constructor() {
        this.warnings = [];
        this.overlay = document.querySelector(".overlay");
        this.loginForm = document.querySelector("form#login_form");
        // document.querySelector(".overlay");
        // passes the action to perform , theelement and what to do after the event has been trigger
        // to super()
        // super attaches the event trigger to the element.
        // type, listener[, options]);
        // this.login_form.addEventListener("submit", this.loginForm.bind(this));
        // super(type,listner)
        // super("submit", overlay);
    }

    get toggle() {
         return this.overlay.classList.toggle("toggle_hide"); // returns false when overlay was not showing
    }

    get on() {
        if (this.overlay.classList.contains("toggle_hide")) {
            if (this.toggle) {
                // when true
            } else {
                const loginForm = this.setLoginForm(this.getLoginForm);
                return loginForm;
            }

        }
    }

    get off() {
        if (!this.overlay.classList.contains("toggle_hide")) {
            this.toggle
        }
    }

    get getLoginForm() {
        return this.loginForm;
    }

     setLoginForm(_form) {
       return    this.loginForm = _form;

    }

    get getOverlay() {
      return this.overlay;
    }

    set setOverlay(_target) {
      return this.overlay = _target;
    }

    set warningMessages(messages) {
        this.warnings.splice(0, this.warnings.length);

        messages.forEach((curr) => {
            this.warnings.push(curr)
        })
        const alert_container = document.querySelector(".alert");
        // this needs to be send somewhere for processing
        alert_container.classList.toggle("toggle_hide");
        alert_container.textContent = message;
    }

    get WarningMessages() {
        return this.warnings
    }




}