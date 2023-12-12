import React from 'react';
import { getRatingText } from '../../utils/get-rating-text';
import { getStarringText } from '../../utils/get-starring-text';
import LOCALE from './film.locale';
import { OverviewProps } from './film.types';

const Overview: React.FC<OverviewProps> = ({ description, director, rating, scoresCount, starring }) => (
  <div className="film-card__desc">

    <div className="film-rating">
      <div className="film-rating__score">{rating.toFixed(1)}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRatingText(rating)}</span>
        <span className="film-rating__count">{scoresCount} ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{description}</p>
      <p className="film-card__director"><strong>{LOCALE.Director}: {director}</strong></p>
      <p className="film-card__starring"><strong>{LOCALE.Starring}: {getStarringText(starring)}</strong></p>
    </div>
  </div>
);

export default Overview;
