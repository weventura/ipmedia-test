import { of } from "rxjs";
import { POKEMON_TYPES_MOCK } from "./pokemon-types.mock";
import { POKEMON_BY_ID_MOCK } from "./pokemon-by-id.mock";
import { POKEMON_SPECIFIC_TYPE_MOCK } from "./pokemon-specific-type.mock";

export const POKEMON_SERVICE_MOCK = {
    getPokemonTypes: () => of(POKEMON_TYPES_MOCK),
    getPokemonById: (url: string) => of(POKEMON_BY_ID_MOCK),
    getPokemonByType: (id: string) => of(POKEMON_SPECIFIC_TYPE_MOCK),
}