import React, { useEffect, useState } from 'react';
import FilmsListComponent from '../components/film-list';
import GenreList from '../components/genres-list';
import {ONE_PART_OF_THE_FILMS } from '../const';
import ShowMoreButton from '../components/show-more-button';
import {useAppSelector } from '../hooks';
import {selectFilms} from '../store/selector';
import Footer from '../components/footer';
import HeaderFilm from '../components/header-film';

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
      <HeaderFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsListComponent films={films} />
          {storeFilms.length > filmCount ? <ShowMoreButton onButtonClick={handleShowMoreButton} /> : ''}
        </section>
        <Footer />
      </div>
    </>
  );
}
export default MainPage;
