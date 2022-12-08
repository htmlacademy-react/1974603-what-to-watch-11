import FilmCardComponent from './film-card';
import {Film} from '../types/film-type';

type Props = {
  films: Film[];
}

function FilmsList({films}: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => (<FilmCardComponent key={film.id} film={film} />))}
    </div>
  );
}

export default FilmsList;
