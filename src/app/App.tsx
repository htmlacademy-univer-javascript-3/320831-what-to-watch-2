import React from 'react';
import './main.css';
import AppRouter from '../components/routers';
import { Provider } from 'react-redux';
import { store } from '../store/store';


const App: React.FC = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
