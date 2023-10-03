export interface PokemonTypesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonType[];
}

export interface PokemonType {
    name: AllTypes;
    url: string;
}

export type AllTypes = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'shadow' | 'unknown';