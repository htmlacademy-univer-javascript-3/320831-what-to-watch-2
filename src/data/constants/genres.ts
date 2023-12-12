import Catalog from '../enums/catalog';
import { CatalogType } from '../types/catalog-type';

const GENRES: CatalogType[] = [
  {
    title: Catalog.All,
  },
  {
    title: Catalog.Comedies,
  },
  {
    title: Catalog.Crime,
  },
  {
    title: Catalog.Documentary,
  },
  {
    title: Catalog.Dramas,
  },
  {
    title: Catalog.Horror,
  },
  {
    title: Catalog.KidsFamily,
  },
  {
    title: Catalog.Romance,
  },
  {
    title: Catalog.SciFi,
  },
  {
    title: Catalog.Thrillers,
  }
];

export default GENRES;
