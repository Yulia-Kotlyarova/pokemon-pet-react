import {IUserActions, pokemonList, setLoading, setPokemonList} from "../src/store/modules/pokemon";
import axios from "axios";

export const fetchPokemonList = () => {
    return async (dispatch) => {
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

test('card list request', () => {
    // * test data

    // * action
    fetchPokemonList();
    // * expectation
    expect(pokemonList.length).toBe(6);
});