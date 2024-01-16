import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Page404 } from '../page-404/page-404.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import {
  selectFilmData, selectFilmError, selectFilmStatus
} from '../../store/films/film-selectors.ts';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { Buttons } from '../../components/buttons/buttons.ts';
import { fetchFilm } from '../../store/api-actions.ts';

const MAX_PROGRESS = 100;

export const PlayerPage: FC = () => {
  const film = useAppSelector(selectFilmData);
  const filmError = useAppSelector(selectFilmError);
  const filmStatus = useAppSelector(selectFilmStatus);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [id, dispatch]);

  const handleFullScreen = useCallback(() => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }, [videoRef]);


  const handlePlayClick = useCallback(() => {
    if (videoRef.current) {
      setIsPlaying((prev) => !prev);
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoRef]);

  const handleUpdate = useCallback(() => {
    if (!videoRef.current) {
      return;
    }
    setTimeLeft(Math.trunc(videoRef.current.duration - videoRef.current.currentTime));
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * MAX_PROGRESS);
  }, [videoRef]);

  const getFormatTime = useCallback((seconds: number) => {
    const date = new Date(seconds * 1000);
    const formattedTime = date.toISOString().slice(11, 19).toString();
    return `-${formattedTime.startsWith('00') ? formattedTime.substring(3) : formattedTime}`;
  }, []);


  if (filmError || !film) {
    return <Page404 />;
  }

  if (!film || filmStatus === 'LOADING') {
    return <Spinner />;
  }

  return (
    <div className="player">
      {isLoadingVideo && <Spinner />}
      <video autoPlay preload={'auto'} ref={videoRef} src={film.videoLink} className="player__video" poster={film.backgroundImage} onLoadStart={() => setIsLoadingVideo(true)} onLoadedData={() => setIsLoadingVideo(false)} onTimeUpdate={handleUpdate} />
      <Link type='button' className="player__exit" to={`/films/${film.id}`}>
            Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={MAX_PROGRESS}/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getFormatTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <Buttons.PausePlay setIsPlaying={handlePlayClick} isPlaying={isPlaying}/>
          <div className="player__name">{film?.name}</div>
          <Buttons.FullScreen handleOnClick={handleFullScreen}/>
        </div>
      </div>
    </div>
  );
};

export const Player = memo(PlayerPage);
