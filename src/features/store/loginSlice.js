import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API  from './appAPI';
import loginHelper from './../login/loginHelper'

const initialState = {
  loginStatus:'idle',
  loginError:'Nope',
  // dati
  isValidSession:false,
  token: null,
}


export const login = createAsyncThunk(
  'login/login',
  async ( data ) => {

      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch( API.login(), {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
      })

      return response.json()
 });

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      checkSession: ( state ) => {
          const session = loginHelper.getLocalStorage('session')
          
          if( session && ((new Date() - new Date( session.datetime )) / 1000 / 3600) < 24){
              state.isValidSession = true
              state.token = session.token
          }else{
              state.isValidSession = false
              state.token = ''
              loginHelper.setLocalStorage('session',null)
          } 
          
      },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
        .addCase(login.pending, ( state ) => {
            state.loginStatus = 'loading'
            state.loginError = ''
        })
        .addCase(login.rejected, ( state , action) => {
            state.isValidSession = false
            state.loginStatus = 'idle'
            state.loginError = 'Errore di connessione'
        })
        .addCase(login.fulfilled, (state, action) => {

            const res = action.payload 
            state.loginStatus = 'idle'

            if( res.result === 1 ){
                loginHelper.setLocalStorage('session',{
                    token:res.token,
                    datetime: new Date()
                })
                state.isValidSession = true
                state.token = res.token
                state.loginError = ''
            }
            else{
                state.isValidSession = false
                state.token = ""
                state.loginError = action.payload.error ? action.payload.error : 'Errore indefinito'
            }

        });
  },
});

export const { checkSession } = loginSlice.actions;

export const selectIsValidSession = (state) => state.login.isValidSession
export const selectLoginStatus = (state) => state.login.loginStatus
export const selectLoginError = (state) => state.login.loginError

export default loginSlice.reducer;
