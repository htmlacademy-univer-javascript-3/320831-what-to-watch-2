import React, { useLayoutEffect } from 'react';
import Logo from '../../components/logo';
import UserBlock from '../../components/user-block/user-block';
import Page404 from '../page404';
import { useParams } from 'react-router-dom';
import Buttons from '../../components/buttons';
import Tabs, { Tab } from '../../components/tabs/tabs';
import Overview from './overview';
import Details from './details';
import Reviews from './reviews';
import LikeThis from './like-this';
import { FILM_TABS } from '../../data/constants/film-tab';
import LOCALE from './film.locale';
import { fetchFilm, fetchReviewsFilm, fetchSimilarFilm } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { resetFilm } from '../../store/action';
import LoadingSreen from '../loading-sreen';
import { AuthorizationStatus } from '../../data/enums/authorization-status';

const Film: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.film);
  const reviewsFilm = useAppSelector((state) => state.reviewsFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const isFilmDataLoading = useAppSelector((state) => state.isFilmDataLoading);
  const isAuth = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);

  useLayoutEffect(() => {
    if (params.id) {
      dispatch(fetchFilm({ filmId: params.id }));
      dispatch(fetchSimilarFilm({ filmId: params.id }));
      dispatch(fetchReviewsFilm({ filmId: params.id }));
    }
    return () => {
      dispatch(resetFilm());
    };
  }, [params.id, dispatch]);

  if (isFilmDataLoading) {
    return <LoadingSreen />;
  }

  if (film === null) {
    return <Page404 />;
  }

  return (
    <>
      <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.backgroundImage}
              alt={film.name}
            />
          </div>

          <h1 className="visually-hidden">{LOCALE.WTW}</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">
                  {film.genre}
                </span>
                <span className="film-card__year">
                  {film.released}
                </span>
              </p>

              <div className="film-card__buttons">
                <Buttons.Play id={film.id} />
                <Buttons.FilmCard count={9} />
                {isAuth ? <Buttons.AddReview id={film.id} /> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <Tabs defaultActiveKey='1' items={FILM_TABS}>
                <Tab key='1'>
                  <Overview {...film} />
                </Tab>
                <Tab key='2'>
                  <Details {...film} />
                </Tab>
                <Tab key='3'>
                  <Reviews reviews={reviewsFilm} />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {similarFilms.length !== 0 ? <LikeThis similarFilms={similarFilms} backgroundColor={film.backgroundColor} /> : null}
    </>
  );
};

export default Film;
