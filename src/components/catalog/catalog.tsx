import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { GenresItemMemo } from './genres-item.tsx';
import { ECatalog } from '../../types/catalog.ts';
import { SmallFilmCardMemo } from '../small-film-card/small-film-card.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import { setGenre } from '../../store/action.ts';
import { Spinner } from '../spinner/spinner.tsx';
import {
  currentGenre, selectfavoriteFilmsData, selectfavoriteFilmsStatus,
  selectFilmsData,
  selectFilmsStatus
} from '../../store/films/film-selectors.ts';
import { fetchFavoriteFilms, fetchMovies } from '../../store/api-actions.ts';


const VISIBLE_FILMS_COUNT = 8;

interface ICatalogProps {
  withGenres?: boolean;
  isFavoriteCatalog?: boolean;
}
const Catalog: FC<ICatalogProps> = ({withGenres, isFavoriteCatalog}) => {
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(VISIBLE_FILMS_COUNT);
  const genre = useAppSelector(currentGenre);
  const filmsData = useAppSelector(selectFilmsData);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const favoriteFilmsData = useAppSelector(selectfavoriteFilmsData);
  const favoriteFilmsStatus = useAppSelector(selectfavoriteFilmsStatus);

  const films = isFavoriteCatalog ? favoriteFilmsData : filmsData;
  const status = isFavoriteCatalog ? favoriteFilmsStatus : filmsStatus;
  const genres = useMemo(() => [ECatalog.All, ...new Set(filmsData?.map((film) => film.genre))], [filmsData]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (films === null) {
      if (isFavoriteCatalog) {
        dispatch(fetchFavoriteFilms());
      } else {
        dispatch(fetchMovies());
      }
    }
  }, [dispatch, films, isFavoriteCatalog]);

  const handleSetGenre = useCallback((value: string) => () => {
    dispatch(setGenre(value));
    setVisibleFilmsCount(VISIBLE_FILMS_COUNT);
  }, [dispatch]);

  const filteredFilms = useMemo(() => {
    if (genre === ECatalog.All) {
      return films;
    }
    return films?.filter((film) => film.genre === genre);
  }, [genre, films]);

  const handleShowMoreClick = useCallback(() => {
    const newVisibleCount = Math.min(visibleFilmsCount + VISIBLE_FILMS_COUNT, filteredFilms?.length || 0);
    setVisibleFilmsCount(newVisibleCount);
  }, [visibleFilmsCount, filteredFilms]);

  const isShowMore = useMemo(() => {
    if (filteredFilms?.length) {
      return filteredFilms?.length - visibleFilmsCount > 0;
    }
    return 0;
  } , [filteredFilms, visibleFilmsCount]);

  if (!films || status === 'LOADING') {
    return <Spinner/>;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {withGenres &&
          genres.map((catalog) => (
            <GenresItemMemo catalog={catalog} key={catalog} setGenre={handleSetGenre} isActive={catalog === genre} />
          ))}
      </ul>

      <div className="catalog__films-list">
        {(filteredFilms?.length) ?
          filteredFilms?.slice(0, visibleFilmsCount).map((film) => (
            <SmallFilmCardMemo key={film.id} film={film} />
          ))
          : null}
      </div>

      {isShowMore && !isFavoriteCatalog && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMoreClick}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
};


export const CatalogMemo = memo(Catalog);
