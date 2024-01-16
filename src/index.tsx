import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { HistoryRouter } from './components/history-router/history-router.tsx';
import {createBrowserHistory} from 'history';
import { App } from './components/app/app.tsx';
import { ToastContainer } from 'react-toastify';

const browserHistory = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
        <ToastContainer position='bottom-right' />

      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
