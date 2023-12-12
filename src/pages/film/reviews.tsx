import React from 'react';
import { IFilm } from '../../data/abstractions';
import { chunk } from '../../utils/chunk';
import { IReview } from '../../data/abstractions/IReview';

const Review: React.FC<IReview> = ({ review, author, date, rating }) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review}</p>
      <footer className="review__details">
        <cite className="review__author">{author}</cite>
        {/* Исправить даты */}
        <time className="review__date" dateTime="2016-12-24">{date}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{rating.toFixed(1)}</div>
  </div>
);

const Reviews: React.FC<IFilm> = ({ reviews }) => (
  <div className="film-card__reviews film-card__row">
    {chunk(reviews, 3).map((threeReviews) => (
      <div className="film-card__reviews-col" key={threeReviews.map(({ author }) => author).join('')}>
        {threeReviews.map((review) => (
          <Review {...review} key={review.author} />
        ))}
      </div>
    ))}
  </div>
);

export default Reviews;
