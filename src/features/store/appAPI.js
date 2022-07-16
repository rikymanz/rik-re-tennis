const site = 'http://localhost:3000'
//const site = 'https://honorable-ossified-headphones.glitch.me'

const API = {
    getAllRegister : () => `${site}/register/`,
    getAllStringing : () => `${site}/stringing/`,
    getOneRegister: ( id ) => `${site}/register/${id}`,
    getOneStringing: ( id ) => `${site}/stringing/${id}`,
    login: () =>  `${site}/users/login/`,
    postRegister : () => `${site}/register/`,
}

export default API