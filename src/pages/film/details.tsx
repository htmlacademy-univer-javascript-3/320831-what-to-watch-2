import React from 'react';
import LOCALE from './film.locale';
import { IFilmAllInfo } from '../../data/abstractions/IFilmAllInfo';
import { convertTimeToString } from '../../utils/convert-time-to-string';

const Details: React.FC<IFilmAllInfo> = ({ director, starring, runTime, genre, released }) => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Director}</strong>
        <span className="film-card__details-value">{director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Starring}</strong>
        <span className="film-card__details-value">
          {starring.map((star, index) => (
            <>
              {`${star}${index !== starring.length - 1 ? ',' : ''}`}{index !== starring.length - 1 ? <br /> : null}
            </>
          ))}
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.RUN_TIME}</strong>
        <span className="film-card__details-value">{convertTimeToString(runTime)}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Genre}</strong>
        <span className="film-card__details-value">{genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Released}</strong>
        <span className="film-card__details-value">{released}</span>
      </p>
    </div>
  </div>
);

export default Details;
