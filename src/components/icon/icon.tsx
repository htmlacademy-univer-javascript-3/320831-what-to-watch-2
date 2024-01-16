import { FC } from 'react';


interface IIcon {
  viewBox: string;
  width: string;
  height: string;
  dataTestId: string;
  xlinkHref: string;
}
export const Icon: FC<IIcon> = ({viewBox, dataTestId, xlinkHref, width, height}) => (
  <svg viewBox={viewBox} width={width} height={height} data-testid={dataTestId}>
    <use xlinkHref={xlinkHref} />
  </svg>
);

