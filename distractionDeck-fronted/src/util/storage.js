
function setStorageItem(stringKey, obj) {
    const key = stringKey;
    return localStorage.setItem(key, JSON.stringify(obj));
}

function getStorageItem(stringKey) {
    const key = stringKey;
    return JSON.parse(localStorage.getItem(key));

}