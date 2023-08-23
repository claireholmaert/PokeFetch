import { Pokemons } from "./Pokemons";

export interface ApiPokemons {

  count: number;
  previous: string;
  next: string;
  results: Pokemons[];
}
