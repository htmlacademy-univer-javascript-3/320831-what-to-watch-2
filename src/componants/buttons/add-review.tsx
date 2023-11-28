import React from 'react';
import LOCALE from './buttons.locale';
import { Link } from 'react-router-dom';

type AddReviewProps = {
  id: string;
}

const AddReview: React.FC<AddReviewProps> = ({ id }) => (
  <Link
    to={`/films/${id}/review`}
    className="btn film-card__button"
    type="button"
  >
    {LOCALE.ADD_REVIERW}
  </Link>

);

export default AddReview;
