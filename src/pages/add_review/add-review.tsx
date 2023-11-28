import React, { useState } from 'react';
import Logo from '../../componants/logo';
import Page404 from '../page404';
import { films } from '../../mocks/films';
import { useParams } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';
import UserBlock from '../../componants/user-block';
import RatingInput from '../../componants/input/rating-stars';
import LOCALE from './add-rewiew.locale';

const initFormValue = {
  rating: null,
  text: ''
};

type FormValueType = {
  rating: null | number;
  text: string;
};

const AddReview: React.FC = () => {
  const params = useParams();
  const film = films.find((f) => f.id === params.id);
  const [formValue, setFormValue] = useState<FormValueType>(initFormValue);

  const onClickRating = (event?: React.ChangeEvent<HTMLInputElement>) => {
    const rating = event?.target.value ? Number(event?.target.value) : null;
    setFormValue((prev) => ({ ...prev, rating }));
  };

  const onChangeText = (event?: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prev) => ({ ...prev, text: event?.target.value ?? '' }));
  };

  const onPost = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event?.preventDefault();
    setFormValue(initFormValue);
  };

  if (film === undefined) {
    return <Page404 />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.thumbnailUrl} alt={film.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs film={film} />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.thumbnailUrl}
            alt={film.title}
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
