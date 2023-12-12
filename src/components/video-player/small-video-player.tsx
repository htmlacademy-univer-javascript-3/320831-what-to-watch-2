import React, { useRef } from 'react';
import useSmallVideoPlayer from './useSmallVideoPlayer';
import { IFilmData } from '../../data/abstractions/IFilmData';

const SmallVideoPlayer: React.FC<IFilmData & { isMuted?: boolean }> = ({
  name, previewImage, previewVideoLink, isMuted = true
}) => {
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
          src={previewVideoLink}
          poster={previewImage}
          muted={isMuted}
          width="280"
          height="175"
          controls={false}
        />
      ) : (
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      )}
    </div>
  );
};

export default SmallVideoPlayer;
