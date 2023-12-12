import React from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo';
import UserBlock from '../../components/user-block';
import { films } from '../../mocks/films';
import FilmList from '../../components/film-list';

const MyList: React.FC = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      <UserBlock />
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmList filmList={films} />
    </section>
    <Footer />
  </div>
);

export default MyList;
