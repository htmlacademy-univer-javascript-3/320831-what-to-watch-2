import React from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo';
import UserBlock from '../../components/user-block';
import FilmList from '../../components/film-list';
import { useAppSelector } from '../../hooks/hooks';

const MyList: React.FC = () => {
  //потом поменять
  const filmList = useAppSelector((state) => state.films);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList filmList={filmList} />
      </section>
      <Footer />
    </div>
  );
};

export default MyList;
