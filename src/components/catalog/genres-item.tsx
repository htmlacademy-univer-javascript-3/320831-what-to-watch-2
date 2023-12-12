import React from 'react';
import { GenresItemProps } from './catalog.types';

const GenresItem: React.FC<GenresItemProps> = ({
  catalog, handleSetGenre, isActive
}) => (
  <li
    className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}
    key={catalog.title}
  >
    <div
      onClick={() => {
        handleSetGenre(catalog.title);
      }}
      className="catalog__genres-link"
    >
      {catalog.title}
    </div>
  </li>
);

export default GenresItem;
