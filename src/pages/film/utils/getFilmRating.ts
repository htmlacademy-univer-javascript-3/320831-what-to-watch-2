export const getFilmRating = (rating = 0) => {
  if (rating >= 10) {
    return 'Awesome';
  } else if (rating >= 8) {
    return 'Very good';
  } else if (rating >= 5) {
    return 'Good';
  } else if (rating >= 3) {
    return 'Normal';
  }
  return 'Bad';
};
