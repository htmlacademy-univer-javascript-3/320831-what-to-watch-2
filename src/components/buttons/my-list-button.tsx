import React, { useCallback, useEffect } from 'react';
import { authorizationStatusData } from '../../store/auth/auth-selectors.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import { fetchFavoriteFilms, setFavorite } from '../../store/api-actions.ts';
import { favoriteCount } from '../../store/films/film-selectors.ts';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../icon/icon.tsx';
import { Film } from '../../types/film.ts';

interface IMyListButtonProps {
  film: Film;
}
export const MyListButton: React.FC<IMyListButtonProps> = ({ film }) => {

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(authorizationStatusData);
  const history = useNavigate();
  const favoriteFilms = useAppSelector(favoriteCount);

  useEffect(() => {
    if (authorizationStatus){
      dispatch(fetchFavoriteFilms());
    }
  }, [authorizationStatus, dispatch, film?.isFavorite]);


  const handleButtonClick = useCallback(() => {
    if (authorizationStatus){
      dispatch(setFavorite({status: !film?.isFavorite, filmId: film.id}));
    } else {
      history('/login');
    }
  }, [authorizationStatus, dispatch, film?.isFavorite, film.id, history]);


  return (
    <button data-testid="card-link" className="btn btn--list film-card__button" type="button" onClick={handleButtonClick}>
      {
        film?.isFavorite ? (
          <Icon xlinkHref={'#in-list'} height={'14'} width={'18'} viewBox={'0 0 18 14'} dataTestId={'in-list'}/>
        ) : (
          <Icon xlinkHref={'#add'} height={'20'} width={'19'} viewBox={'0 0 19 20'} dataTestId={'add'}/>
        )
      }
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms}</span>
    </button>
  );
};
