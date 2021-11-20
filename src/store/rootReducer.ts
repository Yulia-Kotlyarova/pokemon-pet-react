import { combineReducers } from "@reduxjs/toolkit";
import pokemonModule from "./modules/pokemon";

// ? import modules here

const rootReducer = combineReducers({
    pokemon: pokemonModule,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;