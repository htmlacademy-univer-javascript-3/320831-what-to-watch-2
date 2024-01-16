import { FC, memo, useCallback, useEffect } from 'react';
import { Footer } from '../../components/footer/footer.tsx';
import Logo from '../../components/logo/logo.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import { favoriteCount } from '../../store/films/film-selectors.ts';
import { fetchFavoriteFilms, logout } from '../../store/api-actions.ts';
import { CatalogMemo } from '../../components/catalog/catalog.tsx';
import { authorizationStatusData } from '../../store/auth/auth-selectors.ts';
import { useNavigate } from 'react-router-dom';


export const MyListPage: FC = () => {
  const dispatch = useAppDispatch();
  const myFavoriteCount = useAppSelector(favoriteCount);
  const isAuth = useAppSelector(authorizationStatusData);
  const history = useNavigate();

  useEffect(() => {
    dispatch(fetchFavoriteFilms);
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) {
      history('/login');
    }
  }, [history, isAuth]);

  const userLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title" id='my-list-title'>My list <span className="user-page__film-count">{myFavoriteCount}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <button onClick={userLogout} className="user-block__link sign-out">Sign out</button>
          </li>
        </ul>
      </header>

      <CatalogMemo isFavoriteCatalog />

      <Footer/>
    </div>
  );
};

export const MyList = memo(MyListPage);
