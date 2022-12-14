import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {selectAuthorizationStatus, selectUserData} from '../../store/selector';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            {userData && (
              <Link to="/mylist">
                <img src={userData.avatarUrl} alt="User avatar" width="63" height="63" />
              </Link>
            )}
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            } }
            to="/login"
          >
              Sing Out
          </Link>
        </li>
      </ul>

    );
  }

  return (
    <div className="user-block">
      <Link
        to = {AppRoute.SignIn}
        className="user-block__link"
      >
        Sign in
      </Link>
    </div>
  );
}
export default Header;
