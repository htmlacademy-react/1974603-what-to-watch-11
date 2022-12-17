import {Link} from 'react-router-dom';
import Header from '../header/header';

function NotFound (): JSX.Element {
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
        <Header />
      </header>
      <section className= "not__found">
        <h1><b>404. Page not found</b></h1>
        <Link to = "/">Вернуться на главную</Link>
      </section>
    </section>
  );
}
export default NotFound;
