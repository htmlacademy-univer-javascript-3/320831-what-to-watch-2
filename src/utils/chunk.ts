export const chunk = <T>(source: T[], chunkSize: number): T[][] => {
  const res = [];
  const arr = [...source];
  if (chunkSize === 0) {
    return [arr];
  }
  while (arr.length > 0) {
    const ch = arr.splice(0, chunkSize);
    res.push(ch);
  }
  return res;
};
