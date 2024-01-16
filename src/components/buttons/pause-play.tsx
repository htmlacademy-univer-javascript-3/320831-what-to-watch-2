import React from 'react';

interface PausePlayerProps {
  setIsPlaying: () => void;
  isPlaying: boolean;
}

export const PausePlay: React.FC<PausePlayerProps> = ({ setIsPlaying, isPlaying }) => (
  <button type="button" className="player__play" onClick={setIsPlaying}>
    <svg viewBox={isPlaying ? '0 0 14 21' : '0 0 19 19'} width={isPlaying ? '14' : '19'}
      height={isPlaying ? '21' : '19'}
    >
      <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
    </svg>
    <span>{isPlaying ? 'Pause' : 'Play'}</span>
  </button>
);

