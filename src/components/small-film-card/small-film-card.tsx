import React from 'react';
import { Link } from 'react-router-dom';
import SmallVideoPlayer from '../video-player/small-video-player';
import { IFilmData } from '../../data/abstractions/IFilmData';

const SmallFilmCard: React.FC<IFilmData> = (props) => (
  <article className="small-film-card catalog__films-card">
    <SmallVideoPlayer {...props} />
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>
        {props.name}
      </Link>
    </h3>
  </article>
);

export default SmallFilmCard;
