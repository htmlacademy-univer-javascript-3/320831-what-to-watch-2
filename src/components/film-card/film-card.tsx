import React from 'react';
import LOCALE from './film-card.locale';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Buttons from './buttons';
import { useAppSelector } from '../../hooks/hooks';
import LoadingSreen from '../../pages/loading-sreen';

const FilmCard: React.FC = () => {
  const promo = useAppSelector((state) => state.promo);
  if (promo === null) {
    return <LoadingSreen />;
  }
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promo.backgroundImage} alt={promo.name} />
      </div>

      <h1 className="visually-hidden">{LOCALE.TITLE}</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promo.posterImage} alt={promo.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promo.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promo.genre}</span>
              <span className="film-card__year">{promo.released}</span>
            </p>

            <Buttons id={promo.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmCard;
