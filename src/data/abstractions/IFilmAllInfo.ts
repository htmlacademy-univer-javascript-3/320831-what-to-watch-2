import { IFilmData } from './IFilmData';

export interface IFilmAllInfo extends IFilmData {
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  released: number;
  isFavorite?: boolean;
}
