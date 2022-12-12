import FilmsListComponent from '../components/film-list';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import {selectFilms, selectUserName } from '../store/selector';
import Loading from '../components/loading';
import Footer from '../components/footer';

function MyListPage(): JSX.Element {
  const films = useAppSelector(selectFilms);
  const userAvatar = useAppSelector(selectUserName);

  if (!films) {
    return <Loading />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to = "/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to="/mylist">
                <img src={userAvatar} alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsListComponent films = {films}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyListPage;
