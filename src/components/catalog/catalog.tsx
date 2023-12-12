import React from 'react';
import GENRES from '../../data/constants/genres';
import SmallFilmCard from '../small-film-card';
import LOCALE from './catalog.locale';
import GenresItem from './genres-item';
import { CatalogProps } from './catalog.types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getFilmsByGenre, setGenre } from '../../store/action';
import Catalog from '../../data/enums/catalog';

const FilmCatalog: React.FC<CatalogProps> = ({ isNeededGenres }) => {
  const genre = useAppSelector((state) => state.genre);
  const filmList = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  const handleSetGenre = (newGenre: Catalog) => {
    dispatch(setGenre({ genre: newGenre }));
    dispatch(getFilmsByGenre());
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">
        {LOCALE.TITLE}
      </h2>

      {isNeededGenres ?
        <ul className="catalog__genres-list">
          {GENRES.map((catalog) => (
            <GenresItem
              handleSetGenre={handleSetGenre}
              isActive={catalog.title === genre}
              catalog={catalog}
              key={catalog.title}
            />
          ))}
        </ul>
        : null}

      <div className="catalog__films-list">
        {filmList.map((film) =>
          <SmallFilmCard {...film} key={film.id} />
        )}
      </div>

      {filmList.length >= 20 ?
        <div className="catalog__more">
          <button className="catalog__button" type="button">
            {LOCALE.BUTTON}
          </button>
        </div>
        : null}
    </section>
  );
};

export default FilmCatalog;
