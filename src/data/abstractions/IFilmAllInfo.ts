export interface IFilmAllInfo {
  id: string;
  name: string;
  genre: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  posterImage: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  released: number;
  isFavorite?: boolean;
}
