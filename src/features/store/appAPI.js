const API = {
    getAllRegister : () => 'http://localhost:3000/register/',
    getAllStringing : () => 'http://localhost:3000/stringing/',
    getOneRegister: ( id ) => `http://localhost:3000/register/{$id}`,
    getOneStringing: ( id ) => `http://localhost:3000/stringing/{$id}`,
    login: () => `http://localhost:3000/users/login`,
}

export default API