import {FC} from 'react';
import {AppRouter} from '../app-router/app-router.tsx';
import './main.css';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../../store';
import { fetchFavoriteFilms, fetchMovies, fetchPromo, getAuthorizationStatus } from '../../store/api-actions.ts';


store.dispatch(fetchMovies());
store.dispatch(getAuthorizationStatus());
store.dispatch(fetchFavoriteFilms());
store.dispatch(fetchPromo());


export const App: FC = () => (
  <AppRouter />
);

