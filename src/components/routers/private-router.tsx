import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { AuthorizationStatus } from '../../data/enums/authorization-status';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
