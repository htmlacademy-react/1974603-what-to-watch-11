import {Link} from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { selectFilm} from '../store/selector';
import Loading from '../components/loading';
import AddComment from '../components/add-comment';
import Header from '../components/header/header';

function AddReviewPage() : JSX.Element {
  const film = useAppSelector(selectFilm);

  if (!film) {
    return <Loading />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to= {`/films/${film.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <Header />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <AddComment film = {film}/>
      </div>
    </section>
  );
}

export default AddReviewPage;
