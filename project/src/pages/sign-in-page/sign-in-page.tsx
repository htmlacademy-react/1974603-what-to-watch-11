import {FormEvent, useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { AppRoute, AuthorizationStatus, EMAIL_REGULAR_EXPR, PASSWORD_REGULAR_EXPR } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { selectAuthorizationStatus } from '../../store/selector';
import { AuthData } from '../../types/auth-data';

function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);

    if (loginRef.current !== null && passwordRef.current !== null) {
      const emailValidCondition = EMAIL_REGULAR_EXPR.test(String(loginRef.current.value));
      const passwordValidCondition = PASSWORD_REGULAR_EXPR.test(String(passwordRef.current.value));

      if (emailValidCondition && passwordValidCondition) {
        setIsValid(true);

        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      } else {
        setIsValid(false);
      }
    }
    setFormDisabled(false);
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={handleSubmit}>
          {isValid ? '' :
            <div className="sign-in__message">
              <p>We can’t recognize this email and password combination. Please try again.</p>
            </div>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                disabled={formDisabled}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                disabled={formDisabled}
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
