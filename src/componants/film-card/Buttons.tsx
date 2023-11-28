import React from 'react';
import LOCALE from './FilmCard.locale';
import { ButtonsProps } from './FilmCard.types';

// мб в другое место
const Buttons: React.FC<ButtonsProps> = ({ myListCount }) => (
  <div className="film-card__buttons">
    <button className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>{LOCALE.PLAY}</span>
    </button>
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add" />
      </svg>
      <span>{LOCALE.MY_LIST}</span>
      <span className="film-card__count">{myListCount}</span>
    </button>
  </div>
);

export default Buttons;
