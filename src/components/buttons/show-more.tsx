import React from 'react';
import LOCALE from './buttons.locale';

type ShowMoreProps = {
  handleClick: () => void;
};

const ShowMore: React.FC<ShowMoreProps> = ({ handleClick }) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={handleClick}
    >
      {LOCALE.SHOW_MORE}
    </button>
  </div>
);

export default ShowMore;
