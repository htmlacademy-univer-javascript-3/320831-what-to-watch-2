import React from 'react';
import Footer from '../../componants/footer/footer';
import Logo from '../../componants/logo';
import UserBlock from '../../componants/user-block';
import Catalog from '../../componants/catalog';
import { films } from '../../mocks/films';

const MyList: React.FC = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      <UserBlock />
    </header>
    <Catalog filmList={films} />
    <Footer />
  </div>
);

export default MyList;
