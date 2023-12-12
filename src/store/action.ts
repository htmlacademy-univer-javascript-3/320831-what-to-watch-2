import { createAction } from '@reduxjs/toolkit';
import Catalog from '../data/enums/catalog';

export const setGenre = createAction<{genre: Catalog}>('film/genre');

export const getFilmsByGenre = createAction('film/fimlByGenre');
