import { AllTypes } from "./pokemon-types.interface";

export interface SpecificTypeResponse {
    id: number;
    name: AllTypes;
    damage_relations: Object;
    game_indices: [];
    generation: Object;
    move_damage_class: Object;
    moves: [];
    names: [];
    past_damage_relations: [];
    pokemon: PokemonSlot[];
}

export interface PokemonSlot {
    pokemon: Pokemon,
    slot: number;
}

export interface Pokemon {
    name: string;
    url: string;
}