import { store } from "./";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;