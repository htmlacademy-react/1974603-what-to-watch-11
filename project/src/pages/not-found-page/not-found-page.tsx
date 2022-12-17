import {Link} from 'react-router-dom';

function NotFoundPage (): JSX.Element {
  return (
    <section className="film-card">
      <header className="page-header film-card__head">
        <div className="logo">
          <Link to ="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to = "/" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
      <section className= "not__found">
        <h1><b>404. Page not found</b></h1>
        <Link to= "/">Вернуться на главную</Link>
      </section>
    </section>
  );
}
export default NotFoundPage;
