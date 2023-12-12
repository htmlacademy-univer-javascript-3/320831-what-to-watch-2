import React from 'react';
import './main.css';
import AppRouter from '../components/routers';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { checkAuthAction, fetchFilmAction, fetchPromo } from '../store/api-action';

store.dispatch(fetchFilmAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromo());

const App: React.FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
