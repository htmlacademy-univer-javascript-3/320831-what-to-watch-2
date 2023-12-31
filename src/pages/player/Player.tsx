import React from 'react';
import { Link } from 'react-router-dom';
import Page404 from '../page404';
import LOCALE from './player.locale';
import { useAppSelector } from '../../hooks/hooks';

const Player: React.FC = () => {
  // const params = useParams();
  //потом поменять
  const film = useAppSelector((state) => state.film);
  if (film === undefined || film === null) {
    return <Page404 />;
  }
  return (
    <div className="player">
      <video
        src={film?.videoLink}
        className="player__video"
        poster={film?.posterImage}
      />
      <Link type='button' className="player__exit" to={`/films/${film.id}`}>
        {LOCALE.EXIT}
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{ left: '30%' }}>
              {LOCALE.TOGGLER}
            </div>
          </div>
          <div className="player__time-value">
            {film.runTime}
          </div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>{LOCALE.PLAY}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
