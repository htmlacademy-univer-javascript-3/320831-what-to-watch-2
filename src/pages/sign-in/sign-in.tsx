import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react';
import { Footer } from '../../components/footer/footer.tsx';
import Logo from '../../components/logo/logo.tsx';
import { IAuth } from '../../types/api.ts';
import { login } from '../../store/api-actions.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import { authorizationStatusData } from '../../store/auth/auth-selectors.ts';
import { useNavigate } from 'react-router-dom';


export const SignInPage: FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(authorizationStatusData);
  const history = useNavigate();
  const [signIn, setSignIn] = useState<IAuth>({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  useEffect(() => {
    if (auth === true) {
      history('/');
    }
  }, [auth, history]);

  const validateEmail = (email: string) => {
    if (!email.includes('@')) {
      setEmailError('Введите корректный email адрес');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      setPasswordError('Пароль должен содержать хотя бы одну букву и одну цифру');
    } else {
      setPasswordError('');
    }
  };

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignIn((prevSignIn) => ({
      ...prevSignIn,
      [name]: value
    }));
  }, []);


  const handleSignIn = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(login(signIn));
  }, [dispatch, signIn]);


  return (

    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email" value={signIn?.email}
                onChange={(e) => {
                  handleInputChange(e);
                  validateEmail(e.target.value);
                }}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email" data-testid="email-input">Email address</label>
              {emailError && <span>{emailError}</span>}
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                value={signIn?.password}
                onChange={(e) => {
                  handleInputChange(e);
                  validatePassword(e.target.value);
                }}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password" data-testid="password-input">Password</label>
              {passwordError && <span>{passwordError}</span>}
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSignIn}>Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export const SignIn = memo(SignInPage);
