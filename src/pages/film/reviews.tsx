import React from 'react';
import { chunk } from '../../utils/chunk';
import { IReview } from '../../data/abstractions/IReview';
import { formatDate } from '../../utils/format-date';

const Review: React.FC<IReview> = ({ comment, user, date, rating }) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>
      <footer className="review__details">
        <cite className="review__author">{user}</cite>
        <time className="review__date" dateTime={new Date(date).toLocaleDateString()}>
          {formatDate(date)}
        </time>
      </footer>
    </blockquote>
    <div className="review__rating">{rating.toFixed(1)}</div>
  </div>
);

const Reviews: React.FC<{ reviews: IReview[] }> = ({ reviews }) => (
  <div className="film-card__reviews film-card__row">
    {reviews.length === 0 ?
      <p>Комментариев пока нет...</p> :
      chunk(reviews, 3).map((threeReviews) => (
        <div className="film-card__reviews-col" key={threeReviews.map(({ user }) => user).join('')}>
          {threeReviews.map((review) => (
            <Review {...review} key={review.user} />
          ))}
        </div>
      ))}

  </div>
);

export default Reviews;
