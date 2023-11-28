import React from 'react';
import CATALOGS from '../../data/constants/catalogs';
import { smallCardList } from '../../data/constants/smallCardList';
import SmallFilmCard from '../small-film-card';
import LOCALE from './Catalog.locale';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">
      {LOCALE.TITLE}
    </h2>

    <ul className="catalog__genres-list">
      {CATALOGS.map((catalog) => (
        <CatalogItem catalog={catalog} key={catalog.title} />
      ))}
    </ul>

    <div className="catalog__films-list">
      {smallCardList.map((card) => <SmallFilmCard {...card} key={card.title} />)}
    </div>

    <div className="catalog__more">
      <button className="catalog__button" type="button">
        {LOCALE.BUTTON}
      </button>
    </div>
  </section>

);

export default Catalog;
