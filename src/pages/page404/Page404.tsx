import React from 'react';
import { Link } from 'react-router-dom';
import LOCALE from './page404.locale';

const Page404: React.FC = () => (
  <>
    <h1>{LOCALE.TITLE}</h1>
    <Link to='/'>
      {LOCALE.LINK}
    </Link>
  </>
);

export default Page404;
