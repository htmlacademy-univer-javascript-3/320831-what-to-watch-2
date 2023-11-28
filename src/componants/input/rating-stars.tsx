import React from 'react';

type RatingInputProps = {
	onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;
	selectedValue: null | number;
}

const ratings = Array.from({ length: 10 }, (_, index) => index + 1);

const Rating: React.FC<RatingInputProps & { rating: number }> = ({
  rating, onChange, selectedValue
}) => (
  <>
    <input
      className="rating__input"
      id={`star-${rating}`}
      type="radio"
      name="rating"
      value={rating}
      onChange={onChange}
      checked={selectedValue === rating}
    />
    <label className="rating__label" htmlFor={`star-${rating}`}>
			Rating {rating}
    </label>
  </>
);

const RatingInput: React.FC<RatingInputProps> = ({ onChange, selectedValue }) => (
  <div className="rating__stars">
    {ratings.map((rating) => (
      <Rating
        key={rating}
        rating={rating}
        onChange={onChange}
        selectedValue={selectedValue}
      />))}
  </div>
);

export default RatingInput;
