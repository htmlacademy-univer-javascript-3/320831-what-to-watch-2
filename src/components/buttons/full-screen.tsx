import React from 'react';

interface FullScreenProps {
  handleOnClick: () => void;
}

export const FullScreen: React.FC<FullScreenProps> = ({ handleOnClick }) => (
  <button type="button" className="player__full-screen" onClick={handleOnClick}>
    <svg viewBox="0 0 27 27" width="27" height="27">
      <use xlinkHref="#full-screen"></use>
    </svg>
    <span>Full screen</span>
  </button>
);
