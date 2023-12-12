import Footer from '../../components/footer';
import SmallFilmCard from '../../components/small-film-card';
import { LikeThisPropsType } from './film.types';
import React from 'react';
import LOCALE from './film.locale';
import { films } from '../../mocks/films';

const LikeThis: React.FC<LikeThisPropsType> = ({ filmsId }) => (
  <div className="page-content">
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">{LOCALE.LIKE_THIS}</h2>
      <div className="catalog__films-list">
        {films.filter((f) => filmsId.includes(f.id)).map((film) => (
          <SmallFilmCard {...film} key={film.id} />
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default LikeThis;
