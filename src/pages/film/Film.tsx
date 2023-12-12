import React from 'react';
import Logo from '../../components/logo';
import UserBlock from '../../components/user-block/user-block';
import Page404 from '../page404';
import { films } from '../../mocks/films';
import { useParams } from 'react-router-dom';
import Buttons from '../../components/buttons';
import Tabs, { Tab } from '../../components/tabs/tabs';
import Overview from './overview';
import Details from './details';
import Reviews from './reviews';
import LikeThis from './like-this';
import { FILM_TABS } from '../../data/constants/filmTab';
import LOCALE from './film.locale';

const Film: React.FC = () => {
  const params = useParams();
  const film = films.find((f) => f.id === params.id);
  if (film === undefined) {
    return <Page404 />;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.thumbnailUrl}
              alt={film.title}
            />
          </div>

          <h1 className="visually-hidden">{LOCALE.WTW}</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">
                  {film.genre}
                </span>
                <span className="film-card__year">
                  {film.uploadTime}
                </span>
              </p>

              <div className="film-card__buttons">
                <Buttons.Play id={film.id} />
                <Buttons.FilmCard count={9} />
                <Buttons.AddReview id={film.id} />
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.thumbnailUrl}
                alt={film.title}
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
                  <Reviews {...film} />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <LikeThis filmsId={film.likeThis} />
    </>
  );
};

export default Film;
