import { configureStore } from '@reduxjs/toolkit';
import { isSignedReducer } from './reducers/isSignedReducer';

export const store = configureStore({
    reducer: isSignedReducer
});

