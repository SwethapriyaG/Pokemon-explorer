// Interface for an individual Pokémon in the list
export interface Pokemon {
    name: string;
    url: string;
  }
  
  
  export interface Ability {
    ability: {
      name: string;
    };
  }
  
 
  export interface PokemonDetail {
    name: string;
    abilities: Ability[];
    sprites: {
      front_default: string;
    };
  }
  
 
  export {};
  