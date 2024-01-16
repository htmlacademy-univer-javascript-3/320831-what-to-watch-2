import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store.ts';
import { authorizationStatusData, authorizationStatusStatus } from '../../store/auth/auth-selectors.ts';
import { ApiStatusPendingEnum } from '../../types/api.ts';
import { Spinner } from '../spinner/spinner.tsx';


interface IPrivateRouteProps {
  children: ReactElement;
  redirectPath?: string;
}
export const PrivateRoute: FC<IPrivateRouteProps> = ({children, redirectPath = '/login'}) => {
  const isAuth = useAppSelector(authorizationStatusData);
  const authorizationStatus = useAppSelector(authorizationStatusStatus);

  if (authorizationStatus === ApiStatusPendingEnum.LOADING) {
    return (<Spinner />);
  }

  return isAuth ? children : <Navigate to={redirectPath} replace />;
};

