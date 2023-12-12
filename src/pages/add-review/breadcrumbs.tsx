import React from 'react';
import { Link } from 'react-router-dom';
import { IFilm } from '../../data/abstractions';
import LOCALE from './add-rewiew.locale';

type BreadcrumbsProps = {
	film: IFilm;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ film }) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${film.id}`} className="breadcrumbs__link">
          {film.title}
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
