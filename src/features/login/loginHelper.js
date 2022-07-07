const loginHelper = {

    setLocalStorage : ( name , value ) => {
        window.localStorage.setItem( name , JSON.stringify( value ))
    },

    getLocalStorage : ( name ) => {
        const newObject = window.localStorage.getItem(name)
        return JSON.parse(newObject)
    },

}

export default loginHelper