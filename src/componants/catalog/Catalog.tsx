import React from 'react';
import GENRES from '../../data/constants/genres';
import SmallFilmCard from '../small-film-card';
import LOCALE from './catalog.locale';
import GenresItem from './genres-item';
import { CatalogProps } from './catalog.types';

const Catalog: React.FC<CatalogProps> = ({ isNeededGenres, filmList }) => (
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
      {filmList.map((card) =>
        <SmallFilmCard {...card} key={card.title} />
      )}
    </div>

    {filmList.length >= 20 ?
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          {LOCALE.BUTTON}
        </button>
      </div>
      : null}
  </section>

);

export default Catalog;
