import React from 'react';
import { Link } from 'react-router-dom';
import LOCALE from './add-rewiew.locale';
import { IFilmAllInfo } from '../../data/abstractions/IFilmAllInfo';

type BreadcrumbsProps = {
  film: IFilmAllInfo;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ film }) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${film.id}`} className="breadcrumbs__link">
          {film.name}
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">
          {LOCALE.ADD_REWIEW}
        </a>
      </li>
    </ul>
  </nav>
);

export default Breadcrumbs;
