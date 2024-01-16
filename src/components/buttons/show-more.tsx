import React from 'react';

interface ShowMoreProps {
  handleOnClick: () => void;
}

export const ShowMore: React.FC<ShowMoreProps> = ({ handleOnClick }) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={handleOnClick}
    >
      Show more
    </button>
  </div>
);
