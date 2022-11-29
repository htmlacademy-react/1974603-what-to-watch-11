import FilmCardComponent from './film-card';
import {Film} from '../types/film-type';
const ONE_PART_OF_THE_FILMS = 8;

type Props = {
  films: Film[];
}

function FilmsList({films}: Props): JSX.Element {
  const filmsList = films.slice(0,8);
  return (
    <div className="catalog__films-list">
      {films.length > ONE_PART_OF_THE_FILMS ? filmsList.map((film: Film) => (<FilmCardComponent key={film.id} film={film} />)) : films.map((film: Film) => (<FilmCardComponent key={film.id} film={film} />))}
    </div>
  );
}

export default FilmsList;
