import { QueryParams } from "@/types/QueryParams";
import { iPokemonRepository } from "./repositories/iPokemonRepository";

export class PokemonService {
  constructor(private iPokemonRepository: iPokemonRepository) {}

  async createAllPokemons() {
    return this.iPokemonRepository.createAll();
  }

  async findAllPokemons(queries: QueryParams) {
    return this.iPokemonRepository.findAll(queries);
  }

  async findOnePokemon(pokemonId: number) {
    return this.iPokemonRepository.findOne(pokemonId);
  }
}