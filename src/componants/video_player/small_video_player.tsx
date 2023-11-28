import React, { useRef } from 'react';
import useSmallVideoPlayer from './useSmallVideoPlayer';
import { IFilm } from '../../data/abstractions';

const SmallVideoPlayer: React.FC<IFilm & { isMuted?: boolean }> = ({ videoUrl, thumbnailUrl, title, isMuted = true }) => {
  const videoRef = useRef(null);
  const { handleMouseEnter, handleMouseLeave, isHovered } = useSmallVideoPlayer(videoRef);
  return (
    <div
      className="small-film-card__image"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnailUrl}
          muted={isMuted}
          width="280"
          height="175"
          controls={false}
        />
      ) : (
        <img
          src={thumbnailUrl}
          alt={title}
          width="280"
          height="175"
        />
      )}
    </div>
  );
};

export default SmallVideoPlayer;
