import React from 'react';
import { IFilm } from '../../data/abstractions';
import { getRatingText } from '../../utils/get-rating-text';
import { getStarringText } from '../../utils/get-starring-text';
import LOCALE from './film.locale';

const Overview: React.FC<IFilm> = ({ description, author, ratingCount, ratingScore, starrings }) => (
  <div className="film-card__desc">

    <div className="film-rating">
      <div className="film-rating__score">{ratingScore.toFixed(1)}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRatingText(ratingScore)}</span>
        <span className="film-rating__count">{ratingCount} ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{description}</p>
      <p className="film-card__director"><strong>{LOCALE.Director}: {author}</strong></p>
      <p className="film-card__starring"><strong>{LOCALE.Starring}: {getStarringText(starrings)}</strong></p>
    </div>
  </div>
);

export default Overview;
