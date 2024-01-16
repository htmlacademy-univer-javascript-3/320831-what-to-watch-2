import { FC, memo } from 'react';
import { useAppSelector } from '../../hooks/store.ts';
import { selectFilmData, selectFilmStatus, } from '../../store/films/film-selectors.ts';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { ApiStatusPendingEnum } from '../../types/api.ts';
import { Page404 } from '../page-404/page-404.tsx';
import { getFilmRating } from './utils/getFilmRating.ts';


const Overview: FC = () => {
  const film = useAppSelector(selectFilmData);
  const filmStatus = useAppSelector(selectFilmStatus);

  if (filmStatus === ApiStatusPendingEnum.LOADING) {
    return <Spinner/>;
  }
  if (!film) {
    return <Page404/>;
  }

  return (
    <div className="film-card__desc">
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>
        <p className="film-card__director"><strong>Director: {film?.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film?.starring?.join(', ')}</strong></p>
      </div>
    </div>
  );
};

export const OverviewMemo = memo(Overview);
