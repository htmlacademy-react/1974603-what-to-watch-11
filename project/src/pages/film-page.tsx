import { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../components/film-list';
import FilmTabs from '../components/tabs';
import { AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchFilmAction } from '../store/api-actions';
import { selectAuthorizationStatus} from '../store/selector';
import {Film} from '../types/film-type';

type Props = {
film: Film;
films: Film[];
}

function FilmPage({film, films} : Props): JSX.Element {
  const similarFilms = films.filter((item) => item.genre === film.genre).slice(0,4);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const {id} = useParams();
  //const selectedFilm = useAppSelector(selectFilm);

  useEffect(()=>{
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [dispatch,id]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <Link to = "/" className="logo__link">
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
              <Link to="/login" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
              {authorizationStatus === AuthorizationStatus.Auth ? <Link to="/films/:id/review" className="btn film-card__button">Add review</Link> : ''}
            </div>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
          <FilmTabs film={film} />
        </div>
      </div>
      <FilmsList films={similarFilms} />
    </section>
  );
}
export default FilmPage;
