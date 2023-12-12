import React from 'react';
import Footer from '../../components/footer';
import { LikeThisPropsType } from './film.types';
import LOCALE from './film.locale';
import FilmList from '../../components/film-list';

const LikeThis: React.FC<LikeThisPropsType> = ({ similarFilms, backgroundColor }) => (
  <div className="page-content" style={{ background: backgroundColor }}>
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">
        {LOCALE.LIKE_THIS}
      </h2>
      <FilmList filmList={similarFilms} />
    </section>
    <Footer />
  </div>
);

export default LikeThis;
