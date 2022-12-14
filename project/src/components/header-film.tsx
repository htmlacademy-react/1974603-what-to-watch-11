import {Link} from 'react-router-dom';
import Loading from './loading';
import Header from '../components/header/header';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectAuthorizationStatus, selectFavoriteFilms, selectPromoFilm } from '../store/selector';
import {AuthorizationStatus } from '../const';
import { setFilmStatusAction } from '../store/api-actions';

function HeaderFilm (): JSX.Element {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(selectPromoFilm);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const favoriteFilms = useAppSelector(selectFavoriteFilms);

  if (!promoFilm) {
    return <Loading />;
  }

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(setFilmStatusAction({filmId: promoFilm.id, status: Number(!promoFilm.isFavorite)}));
    }
  };

  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
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
          <Header/>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
              </p>
              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`/player/${promoFilm.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteClick}>
                  {!promoFilm.isFavorite && (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  )}
                  {promoFilm.isFavorite && (
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                  )}
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilms.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-header.jpg" alt="" />
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
        <Header/>
      </header>
    </section>
  );
}
export default HeaderFilm;
