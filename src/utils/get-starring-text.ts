export const getStarringText = (starrings: string[]): string => {
  if (starrings.length <= 2) {
    return starrings.join(' and ');
  }
  const firstPart = starrings.slice(0, 3).join(', ');
  return `${firstPart}${starrings.length > 3 ? ' and other' : ''}`;
};
