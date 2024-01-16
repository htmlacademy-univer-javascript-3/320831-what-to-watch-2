import React from 'react';

interface IGenresItemProps {
  catalog: string;
  setGenre: (newGenre: string) => () => void;
  isActive: boolean;
}
const GenresItem: React.FC<IGenresItemProps> = ({
  catalog, setGenre, isActive
}) => (
  <li
    className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}
    key={catalog}
  >
    <div
      onClick={setGenre(catalog)}
      className="catalog__genres-link"
    >
      {catalog}
    </div>
  </li>
);

export const GenresItemMemo = React.memo(GenresItem);
