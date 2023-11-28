import React from 'react';
import { SmallFilmCardProps } from './SmallFilmCard.types';

const SmallFilmCard: React.FC<SmallFilmCardProps> = ({poster, title, link}) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img
        src={poster.src}
        alt={poster.alt}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href={link}>
        {title}
      </a>
    </h3>
  </article>
);

export default SmallFilmCard;
