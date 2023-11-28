import React from 'react';
import { CatalogType } from '../../types';

const CatalogItem: React.FC<{ catalog: CatalogType }> = ({ catalog }) => (
  <li
    className="catalog__genres-item catalog__genres-item--active"
    key={catalog.title}
  >
    <a href={catalog.link} className="catalog__genres-link">
      {catalog.title}
    </a>
  </li>
);

export default CatalogItem;
