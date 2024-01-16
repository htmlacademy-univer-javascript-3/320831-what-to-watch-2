import { Link } from 'react-router-dom';
import { Buttons } from '../buttons/buttons.ts';
import UserBlock from '../user-block/user-block.tsx';
import { FC, memo } from 'react';
import { Film } from '../../types/film.ts';
import { useAppSelector } from '../../hooks/store.ts';
import { authorizationStatusData } from '../../store/auth/auth-selectors.ts';

interface IFilmCardProps {
  film: Film;
}
const FilmCard: FC<IFilmCardProps> = ({ film }) => {
  const { backgroundImage, name, genre, id, posterImage, released } = film;
  const isAuth = useAppSelector(authorizationStatusData);
  return (
    <section className="film-card" data-testid="card-link">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <div className="logo">
          <Link className="logo__link logo__link--light" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <UserBlock />
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <Buttons.Play filmId={id}/>
              <Buttons.MyListButton film={film} />
              {isAuth && <Buttons.AddReview filmId={id}/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FilmCardMemo = memo(FilmCard);
