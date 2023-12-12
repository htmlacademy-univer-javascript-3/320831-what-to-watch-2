import { IFilm } from '../../data/abstractions';
import Catalog from '../../data/enums/catalog';
import { CatalogType } from '../../types';

export type CatalogProps = {
	isNeededGenres?: boolean;
	filmList: IFilm[];
};

export type GenresItemProps = {
  catalog: CatalogType;
  handleSetGenre: (newGenre: Catalog) => void;
  isActive: boolean;
}
