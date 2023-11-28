import React from 'react';
import { IFilm } from '../../data/abstractions';
import { Link } from 'react-router-dom';
import SmallVideoPlayer from '../video_player/small_video_player';

const SmallFilmCard: React.FC<IFilm> = (props) => (
  <article className="small-film-card catalog__films-card">
    <SmallVideoPlayer {...props} />
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${props.id}`}>
        {props.title}
      </Link>
    </h3>
  </article>
);

export default SmallFilmCard;
