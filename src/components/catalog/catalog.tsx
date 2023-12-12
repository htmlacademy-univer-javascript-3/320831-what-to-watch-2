import React, { useEffect } from 'react';
import LOCALE from './catalog.locale';
import GenresItem from './genres-item';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getFilmsByGenre, moreFilms, resetFilmCount, setGenre } from '../../store/action';
import Catalog from '../../data/enums/catalog';
import Buttons from '../buttons';
import FilmList from '../film-list';
import GENRES from '../../data/constants/genres';

const FilmCatalog: React.FC = () => {
  const genre = useAppSelector((state) => state.genre);
  const filmList = useAppSelector((state) => state.films);
  const allFilmCount = useAppSelector((state) => state.allFilmCount);
  const filmCount = useAppSelector((state) => state.filmCount);
  const dispatch = useAppDispatch();

  const handleSetGenre = (newGenre: Catalog) => {
    dispatch(setGenre({ genre: newGenre }));
  };

  const handleShowMore = () => {
    dispatch(moreFilms());
    dispatch(getFilmsByGenre());
  };

  useEffect(() => {
    dispatch(resetFilmCount());
    dispatch(getFilmsByGenre());
  }, [genre, dispatch]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">
        {LOCALE.TITLE}
      </h2>

      <ul className="catalog__genres-list">
        {GENRES.map((catalog) => (
          <GenresItem
            handleSetGenre={handleSetGenre}
            isActive={catalog.title === genre}
            title={catalog.title}
            key={catalog.title}
          />
        ))}
      </ul>

      <FilmList filmList={filmList} />

      {allFilmCount >= filmCount ?
        <Buttons.ShowMore handleClick={handleShowMore} />
        : null}

    </section>
  );
};

export default FilmCatalog;
