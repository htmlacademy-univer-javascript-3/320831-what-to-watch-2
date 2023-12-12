import React from 'react';
import { GenresItemProps } from './catalog.types';

const GenresItem: React.FC<GenresItemProps> = ({
  title, handleSetGenre, isActive
}) => (
  <li
    className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}
  >
    <div
      onClick={() => {
        handleSetGenre(title);
      }}
      className="catalog__genres-link"
    >
      {title}
    </div>
  </li>
);

export default GenresItem;
