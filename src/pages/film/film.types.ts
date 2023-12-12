import { IFilmData } from '../../data/abstractions/IFilmData';

export type LikeThisPropsType = {
  similarFilms: IFilmData[];
  backgroundColor?: string;
}

export type OverviewProps = {
  description: string;
  director: string;
  rating: number;
  scoresCount: number;
  starring: string[];
}
