import React, { useEffect, useState } from 'react';
import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genres-list/genres-list';
import PromoFilm from '../../components/promo-film/promo-film';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { ONE_PART_OF_THE_FILMS } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectFilms } from '../../store/selector';

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
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsList films={films} />
          {storeFilms.length > filmCount ? <ShowMoreButton onButtonClick={handleShowMoreButton} /> : ''}
        </section>
        <Footer />
      </div>
    </>
  );
}
export default MainPage;
