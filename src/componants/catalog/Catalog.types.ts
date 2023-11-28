import { IFilm } from '../../data/abstractions';

export type CatalogProps = {
	isNeededGenres?: boolean;
	filmList: IFilm[];
};
