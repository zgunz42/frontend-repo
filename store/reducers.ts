import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
