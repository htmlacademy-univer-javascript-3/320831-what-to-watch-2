import { Link } from 'react-router-dom';
import { FC } from 'react';

interface AddReviewProps {
  filmId: string;
}
export const AddReview: FC<AddReviewProps> = ({filmId}) => <Link to={`/films/${filmId}/review`} className="btn film-card__button">Add review</Link>;

