import { Pokemon } from './pokemon';

export interface Config {
  pokemon_entries: PokemonEntry[];
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: Pokemon;
}

