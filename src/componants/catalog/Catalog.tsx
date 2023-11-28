import React from 'react';
import GENRES from '../../data/constants/genres';
import SmallFilmCard from '../small-film-card';
import LOCALE from './Catalog.locale';
import GenresItem from './GenresItem';
import { CatalogProps } from './Catalog.types';

const Catalog: React.FC<CatalogProps> = ({isNeededGenres, cardList}) => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">
      {LOCALE.TITLE}
    </h2>

    {isNeededGenres ?
      <ul className="catalog__genres-list">
        {GENRES.map((catalog) => (
          <GenresItem catalog={catalog} key={catalog.title} />
        ))}
      </ul>
      : null}

    <div className="catalog__films-list">
      {cardList.map((card) => <SmallFilmCard {...card} key={card.title} />)}
    </div>

    {cardList.length >= 20 ?
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          {LOCALE.BUTTON}
        </button>
      </div> : null}
  </section>

);

export default Catalog;
