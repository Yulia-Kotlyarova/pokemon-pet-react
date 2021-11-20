import {IUserActions, setPokemonList, setLoading} from "../modules/pokemon";
import {Dispatch} from "redux";
import axios from "axios";
import {IPokemonListItem} from "../modules/pokemon/types";

interface PokemonListData {
    count: number;
    next: string;
    previous: string;
    results: IPokemonListItem[];
}

export const fetchPokemonList = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true))

        await axios
            .get<PokemonListData>('https://pokeapi.co/api/v2/pokemon?limit=6&offset=200')
            .then((response) => {
                dispatch(setPokemonList(response.data.results))
                dispatch(setLoading(false))
            })
            .catch((e) => {
                console.log('err', e);
                dispatch({type: IUserActions.USER_LOAD_LIST_ERR, payload: 'Произошла ошибка'})
            })
    }
}

export const fetchPokemon = (url: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: IUserActions.USER_LOADING, payload: true})

        await axios
            .get<PokemonListData>(url)
            .then((response) => {
                dispatch(setPokemonList(response.data.results))
                dispatch({type: IUserActions.USER_LOADING, payload: false})
            })
            .catch((e) => {
                console.log('err', e);
                dispatch({type: IUserActions.USER_LOAD_LIST_ERR, payload: 'Произошла ошибка'})
            })
    }
}