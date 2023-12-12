import React from 'react';
import SmallFilmCard from '../small-film-card';
import { FilmListProps } from './film-list.types';

const FilmList: React.FC<FilmListProps> = ({ filmList }) => (
  <div className="catalog__films-list">
    {filmList.map((film) =>
      <SmallFilmCard {...film} key={film.id} />
    )}
  </div>
);

export default FilmList;
