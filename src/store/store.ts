import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import { useDispatch } from "react-redux";
// import logger from "redux-logger";
import { AppDispatch } from "./types";

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;