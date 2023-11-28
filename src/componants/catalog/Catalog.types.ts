import { SmallFilmCardProps } from '../small-film-card/SmallFilmCard.types';

export type CatalogProps = {
	isNeededGenres?: boolean;
	cardList: SmallFilmCardProps[];
};
