const API = {
    getAllRegister : () => 'http://localhost:3001/register/',
    getAllStringing : () => 'http://localhost:3001/stringing/',
    getOneRegister: ( id ) => `http://localhost:3001/register/{$id}`,
    getOneStringing: ( id ) => `http://localhost:3001/stringing/{$id}`,
}

export default API