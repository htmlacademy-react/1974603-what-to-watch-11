import FilmsListComponent from '../components/film-list';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import {selectFilms} from '../store/selector';
import Loading from '../components/loading';
import Footer from '../components/footer';
import Header from '../components/header/header';

function MyListPage(): JSX.Element {
  const films = useAppSelector(selectFilms);

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
        <Header />
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
