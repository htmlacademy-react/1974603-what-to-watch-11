import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import FilmsListComponent from '../components/film-list';
import GenreList from '../components/genres-list';
import {ONE_PART_OF_THE_FILMS } from '../const';
import ShowMoreButton from '../components/show-more-button';
import {useAppSelector } from '../hooks';
import {selectFilms} from '../store/selector';
import Header from '../components/header/header';

function MainPage(): JSX.Element {
  const [filmCount, setFilmCount] = useState(ONE_PART_OF_THE_FILMS);
  const storeFilms = useAppSelector(selectFilms);
  const films = storeFilms.slice(0,filmCount);

  const handleShowMoreButton = () => {
    setFilmCount(filmCount + ONE_PART_OF_THE_FILMS);
  };

  useEffect(() => {
    setFilmCount(ONE_PART_OF_THE_FILMS);
  },[storeFilms]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>
            <div className="film-card__desc">
              {/*<h2 className="film-card__title">{film.title}</h2>*/}
              {/*<p className="film-card__meta">*/}
              {/*<span className="film-card__genre">{genre}</span>*/}
              {/*<span className="film-card__year">{releaseData}</span>*/}
              {/*</p>*/}
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsListComponent films = {films} />
          {storeFilms.length > filmCount ? <ShowMoreButton onButtonClick={handleShowMoreButton} /> : ''}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to ="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default MainPage;
