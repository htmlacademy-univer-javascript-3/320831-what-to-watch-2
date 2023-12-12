import { IFilm } from '../../data/abstractions';
import Catalog from '../../data/enums/catalog';

export type CatalogProps = {
	isNeededGenres?: boolean;
	filmList: IFilm[];
};

export type GenresItemProps = {
  title: Catalog;
  handleSetGenre: (newGenre: Catalog) => void;
  isActive: boolean;
}
