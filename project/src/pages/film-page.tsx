import { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../components/film-list';
import Footer from '../components/footer';
import Loading from '../components/loading';
import FilmTabs from '../components/tabs';
import { AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchCommentsListAction, fetchFilmAction } from '../store/api-actions';
import { selectAuthorizationStatus, selectComments, selectFilm, selectFilms, selectFilmsLoading, selectUserName} from '../store/selector';

function FilmPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const films = useAppSelector(selectFilms);
  const film = useAppSelector(selectFilm);
  const comments = useAppSelector(selectComments);
  const isFilmsLoading = useAppSelector(selectFilmsLoading);
  const userAvatar = useAppSelector(selectUserName);

  useEffect(()=>{
    if (id && !isFilmsLoading) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchCommentsListAction(id));
    }
  }, [dispatch, id, isFilmsLoading]);

  if (!film || isFilmsLoading || !id) {
    return <Loading />;
  }

  const similarFilms = films.filter((item) => item.genre === film.genre).slice(0,4);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src={userAvatar} alt="User avatar" width="63" height="63" />
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
                <Link className="btn btn--play film-card__button" to={`/player/${film.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
            <FilmTabs film={film} comments={comments}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={similarFilms} />
        </section>
        <Footer />
      </div>
    </>
  );
}
export default FilmPage;
