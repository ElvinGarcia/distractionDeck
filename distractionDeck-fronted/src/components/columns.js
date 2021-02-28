class Columns{
    constructor() {

    }

    getcolumns() {
        const columns = getStorageItem("user").columns || false
        return columns
      }
}