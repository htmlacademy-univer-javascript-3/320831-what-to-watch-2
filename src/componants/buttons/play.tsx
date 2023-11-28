import React from 'react';
import LOCALE from './buttons.locale';
import { Link } from 'react-router-dom';

type PlayProps = {
	id: string;
}

const Play: React.FC<PlayProps> = ({ id }) => (
  <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
    <svg viewBox="0 0 19 19" width={19} height={19}>
      <use xlinkHref="#play-s" />
    </svg>
    <span>{LOCALE.PLAY}</span>
  </Link>

);

export default Play;
