import { FC, memo } from 'react';
import { SmallFilmCardMemo } from '../small-film-card/small-film-card.tsx';
import { Footer } from '../footer/footer.tsx';
import { useAppSelector } from '../../hooks/store.ts';
import {
  selectSimilarData, selectSimilarError, selectSimilarStatus
} from '../../store/films/film-selectors.ts';
import { Page404 } from '../../pages/page-404/page-404.tsx';
import { Spinner } from '../spinner/spinner.tsx';

interface ILikeThisProps {
  genre?: string;
}
export const LikeThis: FC<ILikeThisProps> = ({ genre}) => {


  const similar = useAppSelector(selectSimilarData);
  const similarStatus = useAppSelector(selectSimilarStatus);
  const similarError = useAppSelector(selectSimilarError);


  const filmLikeThis = similar?.filter((film) => film.genre === genre).slice(0, 4);


  if (similarError) {
    return <Page404/>;
  }

  if (!similar || similarStatus === 'LOADING') {
    return <Spinner/>;
  }
  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {filmLikeThis?.map((film) => (
            <SmallFilmCardMemo film={film} key={film.id} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};


export const LikeThisMemo = memo(LikeThis);
