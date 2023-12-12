export const formatDate = (rowDate: string): string => {
  const date = new Date(rowDate);
  const mount = date.toLocaleString('eng', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${mount} ${day}, ${year}`;
};
