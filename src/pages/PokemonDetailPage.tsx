import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import { PokemonDetail, Ability } from '../types';


const PokemonDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(response.data);
    };

    fetchPokemonDetail();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability: Ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default PokemonDetailPage;
