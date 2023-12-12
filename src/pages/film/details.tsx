import React from 'react';
import { IFilm } from '../../data/abstractions';
import LOCALE from './film.locale';

const Details: React.FC<IFilm> = ({ author, starrings, duration, genre, uploadTime }) => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Director}</strong>
        <span className="film-card__details-value">{author}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Starring}</strong>
        <span className="film-card__details-value">
          {starrings.map((starring, index) => (
            <>
              {`${starring}${index !== length - 1 ? ',' : ''}`}{index !== length - 1 ? <br /> : null}
            </>
          ))}
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.RUN_TIME}</strong>
        <span className="film-card__details-value">{duration}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Genre}</strong>
        <span className="film-card__details-value">{genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">{LOCALE.Released}</strong>
        <span className="film-card__details-value">{uploadTime}</span>
      </p>
    </div>
  </div>
);

export default Details;
