import React from 'react';
import LOCALE from './user-block.locale';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../data/enums/app-route';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logoutAction } from '../../store/api-action';
import { AuthorizationStatus } from '../../data/enums/authorization-status';

const UserBlock: React.FC = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  return authorizationStatus === AuthorizationStatus.Auth ?
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">

        <Link
          to='/login'
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          {LOCALE.OUT}
        </Link>

      </li>
    </ul> :
    <div className="user-block">
      <Link
        to='/login'
        className="user-block__link"
      >
        Sign in
      </Link>
    </div>;
};

export default UserBlock;
