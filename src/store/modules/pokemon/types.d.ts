export interface IPokemon {

}

export interface IPokemonListItem {
    name: string;
    url: string;
}

export interface PokemonState {
    pokemonList: IPokemonListItem[];
    loading: boolean;
    error: string;
}

