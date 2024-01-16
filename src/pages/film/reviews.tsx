import { FC, memo, useMemo } from 'react';
import { IReview } from '../../types/review.ts';
import { Page404 } from '../page-404/page-404.tsx';
import { useAppSelector } from '../../hooks/store.ts';
import {
  selectReviewsData, selectReviewsError, selectReviewsStatus
} from '../../store/films/film-selectors.ts';
import { Spinner } from '../../components/spinner/spinner.tsx';


interface IReviewItemProps {
  review: IReview;
}
const Review: FC<IReviewItemProps> = ({review}) => {
  const getDateString = (date: string): string => {
    const inputDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(inputDate);
  };
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review?.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review?.user}</cite>
          <time
            className="review__date"
            dateTime={getDateString(review?.date)}
          >
            {getDateString(review?.date)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{review?.rating}</div>
    </div>
  );
};
interface IFilmCardReviewsColumnProps {
  reviews: IReview[];
}
const FilmCardReviewsColumn: FC<IFilmCardReviewsColumnProps> = ({ reviews }) => (
  <div className="film-card__reviews-col">
    {reviews.map((review) => (
      <Review key={review?.id} review={review} />
    ))}
  </div>
);

const FilmCardReviewsColumnMemo = memo(FilmCardReviewsColumn);

const Reviews: FC = () => {
  const reviews = useAppSelector(selectReviewsData);
  const reviewsStatus = useAppSelector(selectReviewsStatus);
  const reviewsError = useAppSelector(selectReviewsError);


  const firstColumnReviews = useMemo(() => {
    if (reviews) {
      const halfIndex = Math.ceil(reviews?.length / 2);
      return reviews?.slice(0, halfIndex);
    }
    return [];
  }, [reviews]);

  const secondColumnReviews = useMemo(() => {
    if (reviews) {
      const halfIndex = Math.ceil(reviews?.length / 2);
      return reviews?.slice(halfIndex);
    }
    return [];
  }, [reviews]);

  if (reviewsError) {
    return <Page404/>;
  }

  if (!reviews || reviewsStatus === 'LOADING') {
    return <Spinner/>;
  }

  return (
    reviews
      ? (
        <div className="film-card__reviews film-card__row">
          <FilmCardReviewsColumnMemo reviews={firstColumnReviews} />
          <FilmCardReviewsColumnMemo reviews={secondColumnReviews} />
        </div>
      )
      : <Page404 />
  );
};

export const ReviewsMemo = memo(Reviews);
