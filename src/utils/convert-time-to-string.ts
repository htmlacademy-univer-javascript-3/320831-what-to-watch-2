export const convertTimeToString = (time: number): string => {
  if(time < 60){
    return `${time}m`;
  }
  return`${Math.floor(time / 60)}h ${time % 60}m`;
};
