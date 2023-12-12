import Catalog from '../enums/catalog';
import { IReview } from './IReview';

export interface IFilm {
	id: string;
	title: string;
	thumbnailUrl: string;
	duration: string;
	uploadTime: string;
	views: string;
	author: string;
	videoUrl: string;
	description: string;
	subscriber: string;
	isLive: boolean;
	genre: Catalog;
	starrings: string[];
  ratingScore: number;
  ratingCount: number;
  reviews: IReview[];
  likeThis: string[];
}
