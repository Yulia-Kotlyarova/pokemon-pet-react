import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IPokemon, IPokemonListItem, PokemonState} from "./types";
import { RootState } from "../../rootReducer";
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export enum IUserActions {
    USER_LOADING = 'user/loading',
    USER_LOAD_LIST = 'user/loadList',
    USER_LOAD_LIST_ERR = 'user/loadList/err',
};

export type IUserAction =
    IUserActions.USER_LOAD_LIST |
    IUserActions.USER_LOAD_LIST_ERR |
    IUserActions.USER_LOADING;

export const initialState: PokemonState = {
    pokemonList: [{
        name: '',
        url: ''
    }],
    loading: false,
    error: '',
};

export const pokemonModule = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemonList(state: PokemonState, { payload }: PayloadAction<IPokemonListItem[]>) {
            state.pokemonList = payload;
        },
        setLoading(state: PokemonState, { payload }: PayloadAction<boolean>) {
            state.loading = payload;
            console.log('loading');
        }
    },
});
// * mutations
export const { setPokemonList, setLoading } = pokemonModule.actions;

// * actions
export const loadPokemonData = createAsyncThunk(
    IUserActions.USER_LOAD_LIST,
    async (_, thunkAPI) => {
        try {
            // const res = await apollo.query({
            //     query: POKEMON,
            // });
            // if (res.data) {
            //     thunkAPI.dispatch(setPokemonList(res.data));
            // }
        } catch (err) {
            console.error(err);
        }
    }
);

// export const pokemonApi = createApi({
//     reducerPath: 'pokemonApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query<Pokemon, string>({
//             query: (name) => `pokemon/${name}`,
//         }),
//     }),
// })

// * getters
export const pokemonList = (state: RootState) => state.pokemon.pokemonList;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default pokemonModule.reducer;