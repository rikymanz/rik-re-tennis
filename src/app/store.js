import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import appReducer from '../features/store/appSlice';


export const store = configureStore({
  reducer: {
    app : appReducer,
  },
});
