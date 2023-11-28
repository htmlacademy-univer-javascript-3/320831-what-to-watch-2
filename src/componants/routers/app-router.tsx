import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Pages from '../../pages';
import PrivateRoute from './private-router';

const { Main, Page404, Login, MyList, Player, AddReview, Film } = Pages;

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="mylist" element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path="player/:id" element={<Player />} />
        <Route path="films">
          <Route path=":id" element={<Film />} />
          <Route path=":id/review" element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
          />
        </Route>
      </Route>
      <Route
        path="*"
        element={<Page404 />}
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
