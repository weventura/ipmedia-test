export interface PokemonInfo {
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    past_types: [];
    species: Object;
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
            dream_world: {
                front_default: string;
            }
        };
        versions: Object;
    };
    stats: Stat[];
    types: [];
    weight: number;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: AllStats;
        url: string;
    }
}

export type AllStats = 'hp'  | 'attack' | 'defense' | 'special-attack' | 'speed';