
class Sanitizer{
    constructor() {


    }

    static cleanUp(obj) {
        // const cloneObj = Object.assign(obj);
        // let cloneObjTaget = cloneObj.target;
        // let username = cloneObjTaget.username.value;
        // let password = cloneObjTaget.password.value;
        // sanitizes the values and returns the clean object
        // debugger
        if (Validation.isString(password) && Validation.isString(username)) {
            obj.target.username = obj.target.username.value.replace(/ /g, '');
            obj.target.password = obj.target.password.value.replace(/ /g, '');
        }
        return obj
    }


}