import { Link } from 'react-router-dom';
import { FC } from 'react';


interface PlayProps {
  filmId: string;
}

export const Play: FC<PlayProps> = ({filmId}) => (
  <Link to={`/player/${filmId}`} className="btn btn--play film-card__button" type="button" data-testid="play-button">
    <svg viewBox="0 0 19 19">
      <use xlinkHref="#play-s" />
    </svg>
    <span>Play</span>
  </Link>
);
