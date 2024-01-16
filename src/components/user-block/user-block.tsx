import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import { userStatusData } from '../../store/auth/auth-selectors.ts';
import { logout } from '../../store/api-actions.ts';
import './user-block.scss';

const UserBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userStatusData);
  const history = useNavigate();

  const logoutUser = useCallback(() => {
    dispatch(logout());
    history('/');
  }, [dispatch, history]);

  const loginUser = useCallback(() => {
    history('/login');
  }, [history]);
  return (
    <ul className="user-block">
      {
        user ? (
          <>
            <li className="user-block__item">
              <Link to="/mylist">
                <div className="user-block__avatar">
                  {user && <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />}
                </div>
              </Link>
            </li>
            <li className="user-block__item">
              <button onClick={logoutUser} className="user-block__link sign-out">
                Sign out
              </button>
            </li>
          </>
        ) : (
          <li className="user-block__item">
            <button onClick={loginUser} className="user-block__link sign-out">
              Sign in
            </button>
          </li>
        )
      }
    </ul>
  );
};

export default UserBlock;
