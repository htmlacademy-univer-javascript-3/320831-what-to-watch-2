import React from 'react';
import Footer from '../../componants/footer/Footer';
import Logo from '../../componants/logo';
import UserBlock from '../../componants/user-block';
import Catalog from '../../componants/catalog';
import { smallCardList } from '../../data/constants/smallCardList';

const MyList: React.FC = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      <UserBlock/>
    </header>
    <Catalog cardList={smallCardList.slice(0,9)}/>
    <Footer/>
  </div>
);

export default MyList;
