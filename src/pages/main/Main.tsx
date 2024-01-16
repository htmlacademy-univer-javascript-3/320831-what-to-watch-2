import { FC, memo, useEffect } from 'react';
import { Footer } from '../../components/footer/footer.tsx';
import { FilmCardMemo } from '../../components/film-card/film-card.tsx';
import { CatalogMemo } from '../../components/catalog/catalog.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { Page404 } from '../page-404/page-404.tsx';
import {
  selectFilmsData,
  selectFilmsError,
  selectFilmsStatus, selectPromoData
} from '../../store/films/film-selectors.ts';
import { fetchMovies, fetchPromo } from '../../store/api-actions.ts';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(selectFilmsData);
  const filmError = useAppSelector(selectFilmsError);
  const filmStatus = useAppSelector(selectFilmsStatus);
  const promoData = useAppSelector(selectPromoData);

  useEffect(() => {
    dispatch(fetchPromo());
    if (films === null) {
      dispatch(fetchMovies());
    }
  }, [dispatch, films]);

  if (filmError) {
    return <Page404 />;
  }

  if (!promoData || filmStatus === 'LOADING') {
    return <Spinner />;
  }

  return (
    <>
      <FilmCardMemo film={promoData} />

      <div className="page-content">
        <CatalogMemo withGenres />
        <Footer />
      </div>
    </>
  );
};

export const Main = memo(MainPage);
