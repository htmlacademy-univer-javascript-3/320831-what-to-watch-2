import { FC, memo } from 'react';
import { RatingInput } from './rating-input.tsx';
import { Control } from 'react-hook-form';
import { FormAddReview } from '../../types/form-add-review.ts';


const ratings = [...Array(10).keys()].map((index) => index + 1).sort((a, b) => b - a);

interface IRatingStarsProps {
  onChangeRating: (value: number) => void;
  control: Control<FormAddReview>;
}
const RatingStars: FC<IRatingStarsProps> = ({onChangeRating, control}) => (
  <div className="rating__stars">
    {ratings.map((rating) => (
      <RatingInput
        key={rating}
        rating={rating}
        onChangeRating={onChangeRating}
        control={control}
      />))}
  </div>
);

export const RatingStarsMemo = memo(RatingStars);

