import React, { useLayoutEffect, useState } from 'react';
import Logo from '../../components/logo';
import Page404 from '../page404';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';
import UserBlock from '../../components/user-block';
import RatingInput from '../../components/input/rating-stars';
import LOCALE from './add-rewiew.locale';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { resetFilm } from '../../store/action';
import { addReview, fetchFilm } from '../../store/api-action';
import LoadingSreen from '../loading-sreen';

const initFormValue = {
  rating: null,
  text: ''
};

type FormValueType = {
  rating: null | number;
  text: string;
};

const MAX_LEN_REVIEW = 400;
const MIN_LEN_REVIEW = 50;

const AddReview: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector((state) => state.film);
  const isFilmDataLoading = useAppSelector((state) => state.isFilmDataLoading);
  const [formValue, setFormValue] = useState<FormValueType>(initFormValue);

  useLayoutEffect(() => {
    if (params.id) {
      dispatch(fetchFilm({ filmId: params.id }));
    }
    return () => {
      dispatch(resetFilm());
    };
  }, [params.id, dispatch]);

  const onClickRating = (event?: React.ChangeEvent<HTMLInputElement>) => {
    const rating = event?.target.value ? Number(event?.target.value) : null;
    setFormValue((prev) => ({ ...prev, rating }));
  };

  const onChangeText = (event?: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prev) => ({ ...prev, text: event?.target.value ?? '' }));
  };

  const onPost = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event?.preventDefault();
    if (film?.id === undefined || formValue.rating === null || formValue.text.length < MIN_LEN_REVIEW || formValue.text.length > MAX_LEN_REVIEW) {
      return;
    }
    dispatch(
      addReview({ filmId: film.id, rating: formValue.rating, comment: formValue.text })
    ).then(() => {
      navigate(`/films/${film.id}`);
    });
    setFormValue(initFormValue);
  };

  const isDisabled = formValue.rating === null || formValue.text.length < MIN_LEN_REVIEW || formValue.text.length > MAX_LEN_REVIEW;

  if (isFilmDataLoading) {
    return <LoadingSreen />;
  }

  if (film === null) {
    return <Page404 />;
  }

  return (
    <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs film={film} />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <RatingInput
              onChange={onClickRating}
              selectedValue={formValue.rating}
            />
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              onChange={onChangeText}
              value={formValue.text}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                onClick={onPost}
                disabled={isDisabled}
              >
                {LOCALE.POST}
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

export default AddReview;
