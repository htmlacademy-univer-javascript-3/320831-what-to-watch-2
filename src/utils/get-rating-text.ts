export const getRatingText = (rating: number): string =>{
  if(rating < 3) {
    return 'Bad';
  }
  if(rating < 5) {
    return 'Normal';
  }
  if(rating < 8) {
    return'Good';
  }
  if(rating < 10) {
    return 'Very good';
  }
  if(rating === 10) {
    return 'Awesome';
  }
  return '';
};
