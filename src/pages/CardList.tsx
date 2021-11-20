import React from 'react';
import {useTypedSelector} from "../store/modules/pokemon";
import {useDispatch} from "react-redux";
import {fetchPokemonList} from "../store/action-creators/pokemon";
import { Card } from '../components/Cards/Card';

const CardList: React.FC = () => {
    const dispatch = useDispatch();
    const { pokemonList, error, loading} = useTypedSelector(state => state.pokemon);

    React.useEffect(() => {
        dispatch(fetchPokemonList())
    }, []);

    React.useEffect(() => {
        console.log('pokemonList', pokemonList)
    }, [pokemonList]);

    const PokemonCards = pokemonList.map((pokemon) => {
        return (
            <Card
                key={ pokemon.url }
                name={ pokemon.name }
                url={ pokemon.url }
            />
        )
    })

    return (
        <div>
            { loading && <p> Loading... </p>}
            { error && <p> { error } </p>}
            { pokemonList && PokemonCards }
        </div>
    );
}

export default CardList;
