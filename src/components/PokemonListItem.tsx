import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  imageUrl: string;
}

const PokemonListItem: React.FC<Props> = ({ name, imageUrl }) => {
  return (
    <div className="pokemon-list-item">
      <Link to={`/pokemon/${name}`}>
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default PokemonListItem;
