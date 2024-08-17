import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonListItem from '../components/PokemonListItem';
import Pagination from '../components/Pagination';
import { Pokemon } from '../types';


const PokemonListPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const offset = (currentPage - 1) * 20;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      setPokemonList(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 20));
    };

    fetchPokemonList();
  }, [currentPage]);

  const getIdFromUrl = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <div className="container">
      <h1>Pokémon List</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <div className="pokemon-list-item" key={pokemon.name}>
            <PokemonListItem name={pokemon.name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(pokemon.url)}.png`} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default PokemonListPage;
