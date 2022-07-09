import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import appReducer from '../features/store/appSlice';
import loginSlice from '../features/store/loginSlice';


export const store = configureStore({
  reducer: {
    app : appReducer,
    login: loginSlice,
  },
});
