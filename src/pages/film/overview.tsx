import React from 'react';
import { IFilm } from '../../data/abstractions';
import { ratingText } from '../../utils/rating-text';
import { starringText } from '../../utils/starring-text';
import LOCALE from './film.locale';

const Overview: React.FC<IFilm> = ({ description, author, ratingCount, ratingScore, starrings }) => (
  <div className="film-card__desc">

    <div className="film-rating">
      <div className="film-rating__score">{ratingScore.toFixed(1)}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{ratingText(ratingScore)}</span>
        <span className="film-rating__count">{ratingCount} ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{description}</p>
      <p className="film-card__director"><strong>{LOCALE.Director}: {author}</strong></p>
      <p className="film-card__starring"><strong>{LOCALE.Starring}: {starringText(starrings)}</strong></p>
    </div>
  </div>
);

export default Overview;
