import React from 'react';
import LOCALE from './buttons.locale';

type FilmCardProps = {
	count: number;
}
const FilmCard: React.FC<FilmCardProps> = ({ count }) => (
  <button className="btn btn--list film-card__button" type="button">
    <svg viewBox="0 0 19 20" width={19} height={20}>
      <use xlinkHref="#add" />
    </svg>
    <span>{LOCALE.MY_LIST}</span>
    <span className="film-card__count">{count}</span>
  </button>

);

export default FilmCard;
