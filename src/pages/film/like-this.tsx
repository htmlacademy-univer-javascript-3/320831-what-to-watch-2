import Footer from '../../components/footer';
import { LikeThisPropsType } from './film.types';
import React from 'react';
import LOCALE from './film.locale';
import { films } from '../../mocks/films';
import FilmList from '../../components/film-list';

const LikeThis: React.FC<LikeThisPropsType> = ({ filmsId }) => (
  <div className="page-content">
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">
        {LOCALE.LIKE_THIS}
      </h2>
      <FilmList filmList={films.filter((f) => filmsId.includes(f.id))} />
    </section>
    <Footer />
  </div>
);

export default LikeThis;
